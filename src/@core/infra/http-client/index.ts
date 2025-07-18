// HttpClient.ts
export interface HttpRequestConfig {
  headers?: HeadersInit;
  params?: Record<string, string | number>;
}

export class HttpClient {
  private readonly baseUrl: string;
  private readonly defaultHeaders: HeadersInit;

  constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  private buildUrl(
    path: string,
    params?: Record<string, string | number>,
  ): string {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    body?: BodyInit | null | undefined,
    config?: HttpRequestConfig,
  ): Promise<T> {
    const url = this.buildUrl(path, config?.params);

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...config?.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorText = response.text();
      throw new Error(`HTTP Error ${response.status}: ${errorText}`);
    }

    return response.json();
  }

  public get<T>(path: string, config?: HttpRequestConfig): Promise<T> {
    return this.request<T>('GET', path, undefined, config);
  }

  public post<T>(
    path: string,
    body: BodyInit | null | undefined,
    config?: HttpRequestConfig,
  ): Promise<T> {
    return this.request<T>('POST', path, body, config);
  }

  public put<T>(
    path: string,
    body: BodyInit | null | undefined,
    config?: HttpRequestConfig,
  ): Promise<T> {
    return this.request<T>('PUT', path, body, config);
  }

  public delete<T>(path: string, config?: HttpRequestConfig): Promise<T> {
    return this.request<T>('DELETE', path, undefined, config);
  }
}

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

export const NODE_ENV = process.env.NODE_ENV as 'development' | 'staging' | 'production';

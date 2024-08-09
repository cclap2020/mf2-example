
    export type RemoteKeys = 'app_1/Button' | 'app_1/App';
    type PackageType<T> = T extends 'app_1/App' ? typeof import('app_1/App') :T extends 'app_1/Button' ? typeof import('app_1/Button') :any;
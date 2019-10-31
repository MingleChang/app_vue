import {GET, POST} from './request'

export function GetAppInfo(appId) {
    return GET('/app/' + appId, null)
}

export function UploadApp(data) {
    return POST('/app/upload', data)
}

export function GetPackageIds() {
    return GET('/app/packageids', null)
}
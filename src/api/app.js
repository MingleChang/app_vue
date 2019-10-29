import {GET} from './request'

export function GetAppInfo(appId) {
    return GET('/app/' + appId, null)
}
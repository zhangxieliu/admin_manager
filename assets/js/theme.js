/**
 * Created by Administrator on 2017/1/13.
 * 主要用于保存和恢复页面主题
 */
var saveSelector = {
    'name': 'selectColor',
    'color': 'theme-black'
};

if ($('body').attr('data-type') != 'login') {
// 判断用户是否已有自己选择的模板风格
    if (storageLoad('SelectColor')) {
        $('body').attr('class', storageLoad('SelectColor').color);
    } else {
        storageSave(saveSelector);
        $('body').attr('class', 'theme-black');
    }
}

/**
 * 保存对象数据到localstorage中，对象数据包含name作为key
 * @param objectData 需要保存的对象数据
 */
function storageSave(objectData) {
    localStorage.setItem(objectData.name, JSON.stringify(objectData));
}

/**
 * 判断localstorage是否保存有执行key的值
 * @param objectName 对象key
 * @returns {boolean} 如果存在则返回该key值得value，否则返回false
 */
function storageLoad(objectName) {
    var value = localStorage.getItem(objectName);
    if (value) {
        return value;
    } else {
        return false;
    }
}
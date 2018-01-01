
export namespace fileHelper {

  export type CallBackType = (base64String: string) => void;

  export const base64ToBlob = (dataURI: string): Blob => {
    let byteString, mimestring ;

    if (dataURI.split(',')[0].indexOf('base64') !== -1 ) {
        byteString = atob(dataURI.split(',')[1]);
    } else {
        byteString = decodeURI(dataURI.split(',')[1]);
    }

    mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];

    const content = new Array();
    for (let i = 0; i < byteString.length; i++) {
        content[i] = byteString.charCodeAt(i);
    }

    return new Blob([new Uint8Array(content)], {type: mimestring});
  };

  export const getBase64 = (file: File|Blob, callback: CallBackType) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (loadEvent: any) {
      callback(reader.result);
    };
  };

}

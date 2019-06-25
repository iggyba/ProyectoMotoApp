import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { File } from '@ionic-native/file/ngx';
import { AngularFireStorage } from "@angular/fire/storage";
import { storage } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FotosService {
 
  image:string;

  constructor(private camara: Camera,
              private webView: WebView,
              private file: File,
              private AFStorage : AngularFireStorage) { }


   /* async*/ takePicture(){
    
      
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 750,
      targetWidth:750,
      destinationType: this.camara.DestinationType.DATA_URL,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE,
      sourceType: this.camara.PictureSourceType.CAMERA
    };
    /*const id = Math.random().toString(36).substring(2);
    const result = await this.camara.getPicture(options);
    this.image = `data:image/jpeg;base64,${result}`;
    const pictures = storage().ref(`profilepicture_${id}`);
    pictures.putString(this.image,'data_url');*/
    
    /*await*/ this.camara.getPicture(options).then((imageData) =>{
      this.image = 'data:image/jpeg;base64, '+imageData;
      return this.image;
    }), (err) =>{
      console.log(err);
    }
  } 
  uploadImage(imagen: string){

  }

  makeFileIntoBlob(_imagePath) {
    console.log(_imagePath.replace(":",""));
    _imagePath=_imagePath.replace(":","");
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;

          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));

          fileName = name;

          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {

          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          
          // pass back blob and the name of the file for saving
          // into fire base
          const task = this.AFStorage.upload(fileName, imgBlob);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }
  
}

import {ImageCropperComponent} from './imageCropper/imageCropper.component';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CropperSettings } from './imageCropper/cropperSettings';
import { fileHelper } from '@core/helper/file.helper';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;

  @ViewChild('defaultImg') defaultImg: ElementRef;

  constructor(private _service: AppService) {
      this.cropperSettings = new CropperSettings();
      this.cropperSettings.noFileInput = true;
      // this.cropperSettings.width = 1280;
      // this.cropperSettings.height = 600;
      // this.cropperSettings.minWidth = 1280;
      // this.cropperSettings.minHeight = 600;
      // this.cropperSettings.markerSizeMultiplier = 0;
      // this.cropperSettings.showCenterMarker = false;
      this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth = 2;
      this.cropperSettings.cropperDrawSettings.dragIconStrokeColor = 'white';
      this.cropperSettings.cropperDrawSettings.dragIconFillColor = '#f05f70';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
      this.cropperSettings.cropperDrawSettings.strokeColor = 'yellow';
      // this.cropperSettings.croppedWidth = 1280;
      // this.cropperSettings.croppedHeight = 600;
      this.cropperSettings.canvasWidth = 400;
      this.cropperSettings.canvasHeight = 300;
      this.cropperSettings.centerTouchRadius = 100;
      this.cropperSettings.touchRadius = 30;
      this.cropperSettings.resampleFn = (cropCanvas: HTMLCanvasElement) => {
        console.log(cropCanvas);
      };
      this.cropperSettings.minWithRelativeToResolution = true;
      // this.cropperSettings.preserveSize = true;
      this.cropperSettings.rounded = true;
      this.data = {};
  }

  fileChangeListener($event) {
      const that = this;
      const image: any = new Image();
      const file: File = $event.target.files[0];

      fileHelper.getBase64(file, (base64String: string) => {
        image.src = base64String;
        that.defaultImg.nativeElement.src = base64String;
        that.cropper.setImage(image);
      });
  }

  show() {
    console.log(this.data);
  }

  upload() {
    const formData: FormData = new FormData();

    formData.append('file', fileHelper.base64ToBlob(this.data.image), 'preview.png');

    this._service.upload(formData).subscribe(
      (res) => console.log(res),
    );
  }

  setCropperSize(width: number, height: number) {
    // tslint:disable-next-line:no-console
    console.info('width: ', width, ', height: ', height);

    this.cropperSettings.canvasWidth = width;
    this.cropperSettings.canvasHeight = height;
  }
}

import { DynamsoftEnumsDWT } from "./Dynamsoft.Enum";
export interface Camera {
    /**
     * Hide the camera interface.
     */
    hide(): void;
    /**
     * Show the camera interface.
     */
    show(): void;
    /**
     * Return a list of all available cameras.
     */
    getSourceList(): Promise<DeviceInfo[]>;
    /**
     * Select a camera to use.
     * @param deviceId Specify the camera with its deviceId.
     */
    selectSource(deviceId: string): Promise<DeviceInfo>;
    /**
     * Return the info about the current camera.
     */
    getCurrentSource(): DeviceInfo;
    /**
     * Close the current camera.
     */
    closeSource(): Promise<DeviceInfo>;
    /**
     * Return the resolutions supported by the current camera.
     */
    getResolution(): Promise<Resolution[]>;
    /**
     * Set the resolution for the current camera.
     * @param resolution Specify the resolution.
     */
    setResolution(resolution: Resolution): Promise<Resolution>;
    /**
     * Return the resolution of the current camera.
     */
    getCurrentResolution(): Promise<Resolution>;
    /**
     * Start streaming video from the current camera.
     * @param element Specify an HTML element to put the video stream in.
     * @param resolution Specify the initial resolution.
     */
    play(element?: HTMLElement,
        resolution?: Resolution,
		fill?: boolean
    ): Promise<Resolution>;
    /**
     * Pause the video stream.
     */
    pause(): void;
    /**
     * Resume the video stream.
     */
    resume(): void;
    /**
     * Stop the video stream.
     */
    stop(): void;
    /**
     * Return the status of the current camera.
     */
    getStatus(): string;
    /**
     * Capture a frame from the video stream.
     */
    capture(): Promise<Blob>;
    /**
     * Start streaming video from the current camera in the viewer.
     * @param deviceId Specify a camera.
     * @param resolution Specify the initial resolution.
     * @param mode Specify the mode. Allowed values are 'picture' and 'document'. Setting to 'document' mode will enable border detection.
     * @param fill Whether to leave blank margins when showing
     */
    showVideo(deviceId?: string,
        resolution?: Resolution,
		mode?: string,
		fill?: boolean
    ): Promise<Resolution>;
	/**
     * Start streaming video from the current camera in the viewer.
     * @param documentConfiguration The documentConfiguration settings. If not set, the default setting is used.
     */
	scanDocument(documentConfiguration?: DocumentConfiguration): Promise<Resolution>;
    /**
     * Close the camera and hide the video streaming UI.
     */
    closeVideo(): void;
    /**
     * Specify an event listener for the specified built-in viewer event.
     * @param eventName Specify the event name.
     * @param callback The event listener.
     */
	on(eventName: string, callback: (...param: any[]) => void): void;
    /**
     * Remove a built-in viewer event handler.
     * @param eventName Specify the event name.
     */
	off(eventName: string, callback?: (...param: any[]) => void): void;
}
export interface DeviceInfo {
    deviceId: string;
    label: string;
}
export interface Resolution {
    width: number;
    height: number;
}
export interface ViewerEvent {
    /**
     * The index of the current image.
     */
    index: number;
    /**
     * The x-coordinate of the upper-left corner of the image.
     */
    imageX: number;
    /**
     * The y-coordinate of the upper-left corner of the image.
     */
    imageY: number;
    /**
     * The x-coordinate relative to the browser page.
     */
    pageX: number;
    /**
     * The y-coordinate relative to the browser page.
     */
    pageY: number;
}
export interface DocumentConfiguration {
	scannerViewer?: ScannerViewer;  
	documentEditorSettings?: DocumentEditorSettings; 
}
export interface ScannerViewer {
	deviceId?: string;   //camera id
	maxDocuments?:number;    //The maximum documents can be captured/loaded in to the buffer. 
	enableBorderDetection?: boolean;   //Whether to enable border detection. The default value is true.
	fullScreen?: boolean;   //Whether to display the video in full screen. The default value is false.
	polygonStyle?:{           //The sytle of the auto detect border.
		stroke?: string;           //default: "#fe8e14". Only supports #16 hexadecimal.
		strokeWidth?: string;       //default: "2px"
		dash?: string;   //The allowed value are "solid" and "dashed", the default value is "solid".
	};
	element?: HTMLDivElement | string;  //Bind the elment or elment id. 
				//After binding, display the video in the spcified element, otherwise, display the video in full screen.
	headerStyle?:{
		background?: string;     //background color of the head, default : "#000000". Only supports #16 hexadecimal.
		color?: string;     //The color of the icons, default : "#ffffff". Only supports #16 hexadecimal.
		selectedColor?: string;     //The color of the selected icon, default : "#fe8e14". Only supports #16 hexadecimal.
	};
	bodyStyle?:{ 
		background?: string;  //Background color when the video streaming is not full-screen, default : "#ffffff".  Only supports #16 hexadecimal.
		loaderBarSource?: string;   //Waiting for the document to appear
	};
	footerStyle?:{
		background?: string;  //background color of the foot, default : "#000000". Only supports #16 hexadecimal.
		color?: string;       //The color of the icons, default : "#ffffff". Only supports #16 hexadecimal.
		selectedColor?: string;  //The color of the selected icon, default : "#fe8e14". Only supports #16 hexadecimal.
	};
	scanButtonStyle?:{
		background?: string;  //background color, default : "#fe8e14". Only supports #16 hexadecimal.
		color?: string;  //icon color, default : "#ffffff". Only supports #16 hexadecimal.
	};
	resolution?: {  
		visibility?: string;    //Whether to display the resolution icon in the upper left corner, the value "visible":"hidden". The default value is "visible".
		valueList?: any;
		defaultValue?: Resolution; //Set the default value according to the value set in the valueList.
	};
	autoScan?: { //Automatically capture when a clear document is detected. Only applicable to video scanning. 
		visibility?:string;   //Whether to display the automatic scan icon. The allowed value are "visible" and "hidden". The default value is "visible".
		enableAutoScan?: boolean;   //Whether to enable automatic scan. The default value is false.
	};
	autoDetect?: { //Only applicable to video scanning.    
		visibility?:string;     //Whether to display the automatic border detection icon. The allowed value are "visible" and "hidden". The default value is "visible".
		enableAutoDetect?: boolean;   //Whether to enable automatic border detection. The default value is false.          
		acceptedPolygonConfidence?:number;  //The default value is 80. The higher the setting, the more accurate the automatic border detection.
		fpsLimit?: number;  //The maximum number of frames detected per second. The default value is 3.
		acceptedBlurryScore?:number; //The default value is 0.
		autoCaptureDelay?: number;   //The default value is 1000ms.
	};
	continuousScan?: boolean;  //Whether to continuou capture. The default value is true.
	switchCamera?: {   //The default camera is the rear camera.
		visibility?:string;   //Whether to display the switch camera icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};
							   
	loadLocalFile?: {  
	   visibility?:string;   //Whether to display the load local file icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};

	funcConfirmExit?: (bExistImage: boolean) => Promise<boolean>;
	 //funcConfirmExit is the callback funtion,
  	 //Return Promise.resolve(true): End this capture without saving the image data. Return Promise.resolve(false): Stay on the original viewer
}

export interface DocumentEditorSettings {
	visibility?:string;  //Whether to display the documentEditor. The allowed value are "visible" and "hidden". The default value is "visible".
	element?: HTMLDivElement | string;  //Bind the elment or elment id. 
                             //After binding, display the video in the spcified element, otherwise, display the video in full screen.
	defaultViewerName?:string;  // default viewer.  The allowed value are "cropViewer" and "mainViewer". 
	headerStyle?:{
		background?: string;     //background color of the head, default: "#000000". Only supports #16 hexadecimal.
		color?: string;     //The color of the icons, default : "#ffffff". Only supports #16 hexadecimal.
		selectedColor?: string;     //Selected icon color, default : "#fe8e14". Only supports #16 hexadecimal.
		disabledColor?: string;   //disabled color. default: "#808080"
	};
	bodyStyle?:{ 
		background?: string;  //Background color when the video streaming is not full-screen, default : "#ffffff".  Only supports #16 hexadecimal.
		loaderBarSource?: string;   //Waiting for the document to appear
	};
	footerStyle?:{
		background?: string;  //background color of the foot, default : "#000000". Only supports #16 hexadecimal.
		color?: string;       //The color of the icons, default : "#ffffff". Only supports #16 hexadecimal.
		selectedColor?: string;  //Selected icon color, default: "#fe8e14". Only supports #16 hexadecimal.
	};
	insert?: {   //Insert an image  
		visibility?:string;    //Whether to display the insert icon. The allowed value are "visible" and "hidden". The default value is "visible".
		position?: string;  //Set whether to insert the image "before" or "after" the current image. The default value is "before".
	};

	remove?: {  //Remove an image
		visibility?:string;    //Whether to display the remove icon.The allowed value are "visible" and "hidden". The default value is "visible".
	    funcConfirmRemove?: () => Promise<boolean>;  
		//funcConfirmRemove is the callback funtion,
		//Return Promise.resolve(true): delete the image data. Return Promise.resolve(false): Stay on the original viewer
	};

	rotateLeft?: {  
		visibility?:string;    //Whether to display the rotate left icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};

	filter?: {  
	  visibility?:string;   //Whether to display the filter icon. The allowed value are "visible" and "hidden". The default value is "visible".
	  valueList?:any;
	  defaultValue?: string;  //Filter selected by default. By default, the original filter is selected.
	  applyToAll?: {  //Apply to all documents
		visibility?:string;  //Whether to display the applyToAll icon. The allowed value are "visible" and "hidden". The default value is "visible".
        enableApplyToAll?: boolean;   //Whether to enable to apply to all documents, Default:false.
        label?: string; //the label of the applyToAll, default: "Apply to all"            
	  };
	};
	
	crop?:{  
		visibility?:string;   //Whether to display the crop icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};
	
	cropViewer?:CropViewer;
	funcConfirmExit?: (bChanged: boolean, previousViewerName: string) => Promise<Number | DynamsoftEnumsDWT.EnumDWT_ConfirmExitType>;
	//funcConfirmExit is the callback funtion.
	//Return Promise.resolve(EnumDWT_ConfirmExitType.Exit): Exit original viewer without saving the image data. 
	//Return Promise.resolve(EnumDWT_ConfirmExitType.SaveAndExit): Exit original viewer with saving the image data. 
	//Return Promise.resolve(EnumDWT_ConfirmExitType.Cancel): Stay on the original viewer
	funcConfirmExitAfterSave?: (firedByDocumentEdit: boolean) => void;
	//funcConfirmExitAfterSave is the callback funtion
}
export interface CropViewer {
	visibility?: boolean;   //Whether to display the crop viewer. The allowed value are "visible" and "hidden". The default value is "visible".
      
	polygonStyle?:{     //The polygon style in the crop viewer.       
		stroke?: string;          //default : "#fe8e14".  Only supports #16 hexadecimal.
		strokeWidth?: string;     //default: "2px"
		dash?: string;   //The allowed value are "solid" and "dashed", the default value is "solid".
	};

	rotateLeft?:{   
		visibility?: string;   //Whether to display the rotate left icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};
	rotateRight?:{   
		visibility?: string;   //Whether to display the rotate right icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};
	autoDetectBorder?:{   
		visibility?: string;   //Whether to display the automatic border detection icon. The allowed value are "visible" and "hidden". The default value is "visible".
	};
	funcConfirmExit?: (bChanged: boolean, previousViewerName: string) => Promise<Number | DynamsoftEnumsDWT.EnumDWT_ConfirmExitType>;
	//funcConfirmExit is the callback funtion.
	//Return Promise.resolve(EnumDWT_ConfirmExitType.Exit): Exit original viewer without saving the image data. 
	//Return Promise.resolve(EnumDWT_ConfirmExitType.SaveAndExit): Exit original viewer with saving the image data. 
	//Return Promise.resolve(EnumDWT_ConfirmExitType.Cancel): Stay on the original viewer
}



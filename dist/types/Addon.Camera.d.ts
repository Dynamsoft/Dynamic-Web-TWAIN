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
        resolution?: Resolution
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
     * @param scanConfiguration The scanConfiguration settings. If not set, the default setting is used.
     */
	scanDocument(scanConfiguration?: ScanConfiguration): Promise<Resolution>;
    /**
     * Close the camera and hide the video streaming UI.
     */
    closeVideo(): void;
    /**
     * Specify an event listener for the specified built-in viewer event.
     * @param name Specify the event name.
     * @param callback The event listener.
     */
	on(name: string, callback: (event?: any, event1?: any, event2?: any) => void): void;
    /**
     * Remove a built-in viewer event handler.
     * @param eventName Specify the event name.
     */
	off(eventName: string, callback?: (event: ViewerEvent) => void): boolean;
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
export interface ScanConfiguration {
    element?: HTMLDivElement;  //Bind the elment or elment id. 
                             //After binding, display the video in the spcified element, otherwise, display the video in full screen.

	scannerViewer?: {
		deviceId?: string;   //camera id
		maxDocuments?:number;    //The maximum documents can be captured/loaded in to the buffer. 
		enableBorderDetection?: boolean;   //Whether to enable border detection. The default value is true.
		fullScreen?: boolean;   //Whether to display the video in full screen. The default value is false.
		polygonStyle?:{           //The sytle of the auto detect border.
			stroke?: string;           //default: "#fe8e14". Only supports #16 hexadecimal.
			strokeWidth?: string;       //default: "2px"
			dash?: string;   //The allowed value are "solid" and "dashed", the default value is "solid".
		};

		resolution?: {
			visibility?: boolean;    //Whether to display the resolution icon in the upper left corner. The default value is true.
			valueList?: any;
			defaultValue?: Resolution; //Set the default value according to the value set in the valueList.
        };

		autoScan?: { //Automatically capture when a clear document is detected. Only applicable to video scanning. 
			visibility?: boolean;    //Whether to display the automatic scan icon. The default value is true.
			enableAutoScan?: boolean;   //Whether to enable automatic scan. The default value is false.
		};

		autoDetect?: { //Only applicable to video scanning.    
			visibility?: boolean;    //Whether to display the automatic border detection icon. The default value is true.
			enableAutoDetect?: boolean;   //Whether to enable automatic border detection. The default value is false.          
			acceptedPolygonConfidence?:number;  //The default value is 80. The higher the setting, the more accurate the automatic border detection.
			fpsLimit?: number;  //The maximum number of frames detected per second. The default value is 3.
			acceptedBlurryScore?:number; //The default value is 0.
			autoCaptureDelay?: number;   //The default value is 1000ms.
		};


        continuousScan?:{   //Only applicable to video scanning.
			visibility?: boolean;     //Whether to display the continuous scan icon. The default value is true.
			enableContinuousScan?: boolean;   //Whether to enable continuous scan. The default value is true.
		};

		switchCamera?: {   //The default camera is the rear camera.
			visibility?: boolean;   //Whether to display the switch camera icon. The default value is true.
		};
                                   
		loadLocalFile?: {  
		   visibility?: boolean;   //Whether to display the load local file icon. The default value is true.
		};

		funcConfirmExitContinuousScan?: (bExistImage: boolean) => void;
		 //funcConfirmExitContinuousScan is the callback funtion
		 //Return true：Exit continuous scan mode without saving the captured image data. Return false: Stay on the original viewer

		funcConfirmExit?: (bExistImage: boolean) => void;
		 //funcConfirmExit is the callback funtion，
		 //Return true：End this capture without saving the image data. Return false: Stay on the original viewer
    };

	filterViewer?: {
		visibility?: boolean;   //Whether to display filter viewer. The default value is true.

		insert?: {   //Insert an image  
			visibility?: boolean;   //Whether to display the insert icon. The default value is true.
			position?: string;  //Set whether to insert the image "before" or "after" the current image. The default value is "before".
		};

		remove?: {  //Remove an image
			visibility?: boolean;   //Whether to display the remove icon. The default value is true.
		};

		rotateLeft?: {  
			visibility?: boolean;    //Whether to display the rotate left icon. The default value is true.
		};
  
	filter?: {  
		visibility?: boolean;   //Whether to display the filter icon. The default value is true.
	      valueList?:any;
	      defaultValue?: string;  //Filter selected by default. By default, the original filter is selected.
		};
		exitDocumentScanAfterSave: boolean;  //The default value is false.
	};

	cropViewer?: { 
		visibility?: boolean;   //Whether to display the crop viewer. The default value is true.
      
		polygonStyle?:{     //The polygon style in the crop viewer.       
			stroke?: string;          //default : "#fe8e14".  Only supports #16 hexadecimal.
			strokeWidth?: string;     //default: "2px"
			dash?: string;   //The allowed value are "solid" and "dashed", the default value is "solid".
		};

		rotateLeft?:{   
			visibility?: boolean;   //Whether to display the rotate left icon. The default value is true.
		};
		rotateRight?:{   
			visibility?: boolean;   //Whether to display the rotate right icon. The default value is true.
		};
    	autoDetectBorder?:{   
			visibility?: boolean;   //Whether to display the automatic border detection icon. The default value is true.
		};
	};
}


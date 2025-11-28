import { DynamsoftEnumsDWT } from "./Dynamsoft.Enum";

export interface OCRKit {
    /**
     * Return the OCR installation information.
     */
    GetInstalledOCRInfo(): Promise<OCRInfo>; 
    /**
     * Detect the page's orientation.
     */
    DetectPageOrientation(
       index: number, 
       settings?: {
            detectionMode?: DynamsoftEnumsDWT.EnumDWT_PageOrientationDetectionMode | number
       }
    ): Promise<AngleInfo>;
    /**
     * Perform OCR on the specified image in the buffer.
     * @param index Specify the image.
     * @param settings.language Specify the language for recognition, such as: "en","fr","es","de","it" or "pt".
     * @param settings.pageOrientation  Specify the page orientation.
     * @param rects  Specify the OCR region, which can be multiple.
     */
    Recognize(
        index: number,
        options?: {
            settings?: {
                language?: string,   
                pageOrientation?: DynamsoftEnumsDWT.EnumDWT_PageOrientation | number, 
            }, 
            rects?:Rect[]
        }
    ): Promise<OCRResult>; 
    /**
     * Save the OCR result as a file.
     * @param indices Specify the image(s).
     * @param path The path to save the file.
     * @param format Specify the output format.
     */
    SaveToPath(indices: number[], 
        outputFormat: DynamsoftEnumsDWT.EnumDWT_OCRKitOutputFormat | number, 
        path: string): Promise<boolean>;
    /**
     * Save the OCR result as a blob.
     * @param indices Specify the image(s).
     * @param format Specify the output format.
     */
    SaveAsBlob(indices: number[], 
        outputFormat:DynamsoftEnumsDWT.EnumDWT_OCRKitOutputFormat | number): Promise<Blob>;
    /**
     * Save the OCR result as a base64 string.
     * @param indices Specify the image(s).
     * @param format Specify the output format.
     */
    SaveAsBase64(indices: number[], 
        outputFormat:DynamsoftEnumsDWT.EnumDWT_OCRKitOutputFormat | number): Promise<string>;

}
export interface OCRResult {
    /**
     * The imageId of the image which can be used to find the index.
     */
    imageID: string;   
    /**
     * The width and height of the image.
     */
    dimensions: {width: number; height: number}; 
    /**
     * The rotation angle of the page and its confidence level.
     */
    orientation: {value: number; confidence: number}; 
    blocks:{
        lines: {
            /**
             * The region of the line.
             */
            geometry: Rect;
            words?:{
                /**
                 * OCR result of the word.
                 */
                value: string; 
                 /**
                 * The confidence level of the OCR result of the word.
                 */
                confidence: number;  
                 /**
                 * The region of the word.
                 */
                geometry: Rect;
            }[];
        }[];	
    }[];
}
export interface OCRInfo {
    /**
     * Return the OCR version.
     */
    version: string;    
}
export interface AngleInfo {
    /**
     * Return the page's orientation.
     */
    angle: DynamsoftEnumsDWT.EnumDWT_PageOrientation |number;
    /**
     * Return the confidence level of the page's orientation.
     */
    confidence:number; 
}
export interface Rect {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: Function
    accept: string
    children: React.ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement | any>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: 'none'}}
                ref={ref}
                onChange={onChange}
            />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {children}
            </div>
        </div>
    );
};

export default FileUpload;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dynamsoft.upload;

import com.mongodb.DB;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSDBFile;
import com.mongodb.gridfs.GridFSInputFile;
import static com.sun.xml.ws.spi.db.BindingContextFactory.LOGGER;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

public class FileManager {

    public void saveToDb(ServletContext context, HttpServletResponse response, InputStream in, String fileName) {
        if (in == null) {
            return;
        }

        PrintWriter writer = null;
        try {
            writer = response.getWriter();
        } catch (IOException ex) {
            Logger.getLogger(FileManager.class.getName()).log(Level.SEVERE, null, ex);
            return;
        }

        try {
            MongoClient mongoClient = new MongoClient("localhost"); // connect to mongodb
            DB db = mongoClient.getDB("dynamsoft");                 // get database

            GridFS fs = new GridFS(db, "twain");                    // GridFS for storing images

            GridFSInputFile file = fs.createFile(in, fileName);
            file.setContentType("image");
            file.save();
            writer.println(file.toString());
            mongoClient.close();                                   // close all resources
        } catch (Exception e) {
            writer.println("database exception");
        }

    }

    public void loadFromDb(String fileName) {
        try {
            MongoClient mongoClient = new MongoClient("localhost"); // connect to mongodb
            DB db = mongoClient.getDB("dynamsoft");                 // get database

            GridFS fs = new GridFS(db, "twain");                    // GridFS for storing images

            GridFSDBFile file = fs.findOne(fileName);

            FileOutputStream out = new FileOutputStream("upload/out.jpg");
            file.writeTo(out);
            out.close();

            mongoClient.close();                                   // close all resources
        } catch (Exception e) {

        }

    }

    public void removeAllFiles() {

        try {
            MongoClient mongoClient = new MongoClient("localhost"); // connect to mongodb
            DB db = mongoClient.getDB("dynamsoft");                 // get database

            GridFS fs = new GridFS(db, "twain");                    // GridFS for storing images

            DBCursor dbCursor = fs.getFileList();
            DBObject dbObj = null;
            while (dbCursor.hasNext()) {
                dbObj = dbCursor.next();
                System.out.println(dbObj);
                fs.remove(dbObj);
            }

            mongoClient.close();                                   // close all resources
        } catch (Exception e) {

        }
    }

    public void saveToDisk(ServletContext context, HttpServletResponse response, InputStream in, String fileName) {
        if (in == null) {
            return;
        }

        OutputStream out = null;
        PrintWriter writer = null;

        String realPath = context.getRealPath("/");
        if (realPath == null) {
            realPath = "f:\\web_upload";                            // modify the default uploading dir accordingly
        }
        String uploadPath = realPath + File.separator + "upload";

        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {                                  // create the dir for uploading files
            uploadDir.mkdir();
        }

        try {
            writer = response.getWriter();
            out = new FileOutputStream(new File(uploadPath + File.separator
                    + fileName));
        } catch (IOException ex) {
            Logger.getLogger(FileManager.class.getName()).log(Level.SEVERE, null, ex);
            return;
        }

        int read = 0;
        final byte[] bytes = new byte[1024];
        try {
            while ((read = in.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
        } catch (IOException ex) {
            Logger.getLogger(FileManager.class.getName()).log(Level.SEVERE, null, ex);
            return;
        }

        writer.println("New file " + fileName + " created at " + uploadPath);
        LOGGER.log(Level.INFO, "File{0}being uploaded to {1}",
                new Object[]{fileName, uploadPath});
    }
}

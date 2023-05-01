import { Router } from "express";
import fs from "fs-extra";
import path from "path";

const PATH_ROUTES = path.join(__dirname, "..", "routes");
export const router = Router();

const rmExtension = (filename: string) => {
    return filename.split(".").shift();
};

const readRoutes = (folderPath: string) => {
    const items = fs.readdirSync(folderPath, { withFileTypes: true });

    items.forEach((item) => {
        const fullPath = path.join(folderPath, item.name);

        if (item.isDirectory()) {
            readRoutes(fullPath);
        } else if (item.isFile() && item.name.match("route")) {
            const routeModule = require(fullPath);
            if (typeof routeModule.register === "function") {
                routeModule.register(router);
            }
        }
    });
};

readRoutes(PATH_ROUTES);

export default router;
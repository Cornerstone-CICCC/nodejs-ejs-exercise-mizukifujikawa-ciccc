import { Router, Request, Response } from 'express'

const pageRouter = Router()

pageRouter.get("/", (req: Request, res: Response) => {
    res.render("home", {
      title: "Home",
    });
  });
  
  pageRouter.get("/about", (req: Request, res: Response) => {
    res.render("about", {
      title: "About",
    });
  });
  
  pageRouter.get("/contact", (req: Request, res: Response) => {
    res.render("contact", {
      title: "Contact",
    });
  });

export default pageRouter
import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class ticketController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/ticket/:id', this.GpDelete);
this.router.get('/ticket/get/search', this.GpSearch);
this.router.put('/ticket/get/update', this.GpSearchForUpdate);
this.router.put('/ticket', this.GpUpdate);
this.router.get('/ticket/:id', this.GpGetNounById);
this.router.get('/ticket', this.GpGetAllValues);
this.router.post('/ticket', this.GpCreate);
this.router.get('/ticket/userid/created_by', this.GpGetNounCreatedBy);
        this.router.get('/ticket/get/searchrelationship', this.GpSearchRelationship);
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpDelete');
        new ApiAdapter().delete(Constant.TICKETURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpSearch');
        new ApiAdapter().get(Constant.TICKETURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.TICKETURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpUpdate');
        new ApiAdapter().put(Constant.TICKETURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.TICKETURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.TICKETURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpCreate');
        new ApiAdapter().post(Constant.TICKETURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.TICKETURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    public GpSearchRelationship(req: Request, res: Response) 
                                            {
                                                let response1:any;
                                                let response2:any;
                                                let finalresponse:any;
                                                let relURL = '/types/get/search?name=';                                                
                                                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpSearch');
                                                new ApiAdapter().get(Constant.TICKETURL + `${req.url}`).then((res: any) => res.response.json()).then(result => 
                                                {
                                                  response1 = result;
                                                  new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpSearch');
                                                  new CustomLogger().showLogger('info', 'Enter into typesController.ts: GpSearch');
                                                  new ApiAdapter().get(`${Constant.TYPESURL}`+`${relURL}`+`${response1[0].types}`).then((res: any) => res.response.json()).then(result => 
                                                  {
                                                    response2 = result;
                                                    finalresponse = 
                                                    {
                                                      "response1" : response1,
                                                      "response2" : response2
                                                    }
                                                    new CustomLogger().showLogger('info', 'Exit from typesController.ts: GpSearch');
                                                    req.baseUrl === '/mobile' ? res.send(finalresponse) :
                                                    req.baseUrl === '/web' ? res.send(finalresponse) : res.send(null);
                                                  });
                                                }).catch(err => 
                                                   {
                                                    res.send(err);
                                                   });
                                            }

    //#@apifacebooklogin@#

    //#@apigithublogin@#








}

n@#








}


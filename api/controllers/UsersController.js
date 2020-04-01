/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getUsers:function(req,res){
        sails.log("Getted users");
        var id=req.params.id
        Users.findOne({_id:id}).exec(function(err,result){
            if(err) return err
            sails.log(result)
            if(result==undefined) res.send("No Data Found")
            res.json(result)
        })  

    },
    postUser:function(req,res){
        sails.log("Posting User")
        sails.log(req.body.FirstName +" "+req.body.LastName)
        sails.log("Done")
        data={FirstName:req.body.FirstName,LastName:req.body.LastName}
        // sails.log(data)
        Users.create(data).fetch().exec(function(err,result){
            if(err) return err
            console.log(result)
            res.json(result)
        })
    }

};


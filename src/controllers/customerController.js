const controller ={};

controller.list =(req, res)=> {
    req.getconnection((err,conn) => {
        conn.query('SELECT * FROM usuarios',(err,customers)=>{
            if (err){
                res.json(err);
            }
            //si no puedes intenta cambiar data por usuarios o arriba tambien
res.render('customers',{
                     data:customers
             });
        });
    });
};
//conectar datos entrantes con base de datos OJASOS ESOTO SI SE INSERTA
controller.save = (req,res) =>  {
    const data = req.body;
req.getconnection((err,conn) => {
    conn.query('INSERT INTO usuarios set ?', [data], (err,customer)=> {
        res.redirect('/'); 
    });
})
};
//editar datos     Si no funciona intenta cambiando rows por customer
controller.edit = (req,res) => {
    const {id_usuario} = req.params;
    req.getconnection((err,conn)=>{
        conn.query('SELECT * FROM usuarios WHERE id_usuario = ? ', [id_usuario],(err,customer )=> {
            res.render('customer_edit', {
                data:customer[0]
            });
        });
    })
};
//eliminar datos 
controller.delete = (req,res) =>  {
    const {id_usuario} = req.params;
req.getconnection((err,conn)=>{
    conn.query('DELETE FROM usuarios WHERE id_usuario = ? ', [id_usuario],(err,rows )=> {
        res.redirect('/');
    });
})
};
module.exports = controller;

controller.update = (req,res) => {
    const {id_usuario} = req.params;
    const newcustomer = req.body;
    req.getconnection((err,conn)=>{
        conn.query('UPDATE usuarios set  ? WHERE id_usuarios = ?', [newcustomer,id_usuario],(err,rows )=> {
            res.redirect('/');
        });
    })
};
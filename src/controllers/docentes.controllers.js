import { pool } from "../db.js"

export const getDocentes = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from docentes')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const getDocente = async (req, res) => {
    try {
        const [rows] = await pool.query('select * from docentes where id_docente = ?', [req.params.id])

        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const createDocente = async (req, res) => {
    let body=req.body
    let id_docente=null
    let nombre="nombre"
    let usuario="body.usuario"
    let escuela="body.escuela"
    let correo="body.correo"
    let contra="body.contra"


    try {
        await pool.query('insert into docentes (id_docente, nombre, usuario, escuela, correo, contra) values (?, ?, ?, ?, ?, ?)', [id_docente,nombre, usuario, escuela, correo, contra])

        res.send(req.body)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const updateDocente = async (req, res) => {
    const { id } = req.params
    const { nombre, usuario, escuela, correo, contra } = req.body

    try {


        const [result] = await pool.query('update docentes set nombre = IFNULL(?, nombre), usuario = IFNULL(?,usuario), escuela = IFNULL(?,escuela), correo = IFNULL(?,correo), contra = IFNULL(?,contra) where id_docente = ?', [nombre, usuario, escuela, correo, contra, id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }

        const [rows] = await pool.query('select * from docentes where id_docente=?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}

export const deleteDocente = async (req, res) => {
    try {
        const [result] = await pool.query('delete from docentes where id_docente = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Docente no encontrado"
            })
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo funciono mal"
        })
    }
}
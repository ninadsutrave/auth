import {Sequelize, DataTypes} from 'sequelize'
const sequelize = new Sequelize(`postgres://ninadsutrave:2019med1010@localhost:5432/testdatabase`, {dialect: "postgres"})
import userModel from './userModel'

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = userModel(sequelize, DataTypes)

//exporting the module
export default db
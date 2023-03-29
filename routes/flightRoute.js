const express = require('express')

const router = express.Router()

const flightController = require('../controllers/flightController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for capLogs, attach it to router along with the controller logic
router.get('/', flightController.index)

// Setup a "new" route for creating flights
router.get('/new', flightController.new)

router.delete('/clear', flightController.clear)

// Setup a "delete" route for removing a specific flight
router.delete('/:id', flightController.delete)

// router.post('/seed', capLogController.seed)

// Setup a "create" route for adding flights data
router.post('/', flightController.create)

// Setup an "show" route for flights, attach it to router along with the controller logic
router.get('/:id', flightController.show) 

// Setup a "edit" route for editing a capLog
// router.get('/:id/edit', flightController.edit)

router.get('/:id/destinations', flightController.indexDestination)

router.delete('/:id/destinations/:did', flightController.deleteDestination)

// // Setup a "update" route for updating a specific capLog
router.put('/:id/destinations/:did', flightController.updateDestination)

router.post('/:id/destinations', flightController.createDestination)

router.get('/:id/destinations/:did',flightController.showDestination)


module.exports = router;
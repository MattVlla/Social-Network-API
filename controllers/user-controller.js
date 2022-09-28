const { User, Thought } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
            .then((dbUser) => res.json(dbUser))
            .catch((err) => res.status(500).json(err));
    },

    getUserById(req, res) {
        Users.findOne({ _id: params.id })
            .select('-__v')
            .then((dbUser) =>
                !dbUser
                    ? res.status(404).json({ message: 'no Users with that ID' })
                    : res.json(dbUser)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
            .then((dbUser) => res.json(dbUser))
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUser => {
                if (!dbUser) {
                    return res.status(404).json ({ message: 'no user found.'})
                }
            })
            .then(() => res.json({ message: 'user deleted' }))
            .catch((err) => res.status(500).json(err));
    },
};
// const mongoose = require('mongoose');
// const Vocab = mongoose.model('Vocab');

// exports.list_all_Words = (req, res) => {
//     Vocab.find({}, (err, words) => {
//         if (err) res.send(err);
//         res.json(words);
//     });
// };

// exports.create_a_word = (req, res) => {
//     const newWord = new Vocab(req.body);
//     newWord.save((err, word) => {
//         if (err) res.send(err);
//         res.json(word);
//     });
// };  

// exports.read_a_word = (req, res) => {
//     Vocab.findById(req.params.wordId, (err, word) => {
//         if (err) res.send(err);
//         res.json(word);
//     });
// };

// exports.update_a_word = (req, res) => {
//     Vocab.findOneAndUpdate(
//         { _id: req.params.wordId },
//         req.body,
//         { new: true },
//         (err, word) => {
//             if (err) res.send(err);
//             res.json(word);
//         }
//     );
// };

// exports.delete_a_word = (req, res) => {
//     Vocab.remove(
//         { _id: req.params.wordId },
//         (err, word) => {
//             if (err) res.send(err);
//             res.json({ message: 'Word successfully deleted' });
//         }
//     );
// };


const mongoose = require('mongoose');
const Vocab = mongoose.model('Vocab');

// GET all words
exports.list_all_Words = async (req, res) => {
    try {
        const words = await Vocab.find({});
        res.json(words);
    } catch (err) {
        res.status(500).send(err);
    }
};

// CREATE a word
exports.create_a_word = async (req, res) => {
    try {
        const newWord = new Vocab(req.body);
        const word = await newWord.save();
        res.json(word);
    } catch (err) {
        res.status(500).send(err);
    }
};

// GET a single word
exports.read_a_word = async (req, res) => {
    try {
        const word = await Vocab.findById(req.params.wordId);
        res.json(word);
    } catch (err) {
        res.status(500).send(err);
    }
};

// UPDATE a word
exports.update_a_word = async (req, res) => {
    try {
        const word = await Vocab.findOneAndUpdate(
            { _id: req.params.wordId },
            req.body,
            { new: true }
        );
        res.json(word);
    } catch (err) {
        res.status(500).send(err);
    }
};

// DELETE a word
exports.delete_a_word = async (req, res) => {
    try {
        await Vocab.deleteOne({ _id: req.params.wordId });
        res.json({ message: 'Word successfully deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};

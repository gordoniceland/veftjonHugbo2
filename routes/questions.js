var Question = require('../models/question');
var QuestionText = require('../models/questiontext');
var User = require('../models/user')
var express = require('express');
var router = express.Router();

router.route('/questions').get(function(req, res) {
    Question.find(function(err, questions) {
      if (err) {
        console.log("err");
        return res.send(err);
      }
      console.log("test");
      res.json(questions);
    });
  });

router.route('/questions').post(function(req, res) {
    var question = new Question(req.body);
  
    question.save(function(err) {
      if (err) {
        return res.send(err);
      }
  
      res.send({ message: 'Question Added' });
    });
});


router.route('/questionstext').post(function(req, res) {
  var questiontext = new QuestionText(req.body);

  questiontext.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'QuestionText Added' });
  });
});

router.route('/user').post(function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'User Added' });
  });
});


router.route('/questions')
  .get(function(req, res) {
    Question.find(function(err, questions) {
      if (err) {
        return res.send(err);
      }

      res.json(questions);
    });
  })
  .post(function(req, res) {
    var question = new Question(req.body);

    question.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'Question Added' });
    });
});

router.route('/questionstext')
  .get(function(req, res) {
    QuestionText.find(function(err, questions) {
      if (err) {
        return res.send(err);
      }

      res.json(questions);
    });
  })
  .post(function(req, res) {
    var questiontext = new QuestionText(req.body);

    questiontext.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'QuestionTexter Added' });
    });
});

router.route('/user')
  .get(function(req, res) {
    User.find(function(err, questions) {
      if (err) {
        return res.send(err);
      }

      res.json(questions);
    });
  })
  .post(function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.send({ message: 'User Added' });
    });
});



router.route('/questions/:id').put(function(req,res){
  Question.findOne({ _id: req.params.id }, function(err, question) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      question[prop] = req.body[prop];
    }

    // save the movie
    question.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Question updated!' });
    });
  });
});

router.route('/questions/:id').get(function(req, res) {
  Question.findOne({ _id: req.params.id}, function(err, question) {
    if (err) {
      return res.send(err);
    }

    res.json(question);
  });
});


router.route('/questions/:id').delete(function(req, res) {
  Question.remove({
    _id: req.params.id
  }, function(err, question) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;

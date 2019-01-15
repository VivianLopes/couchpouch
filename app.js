var db = new PouchDB('pouchouchdb');
console.log('hello world')
console.log(db)

var doc = {
    "_id": "messages",
    "messages": [
      "this is a message",
      "what is a message",
      "who is a message"
    ]
  };

  db.get('messages').then(function (doc) {
    console.log(doc);
  });
  
  const form = document.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    const newMessage = document.querySelector('textarea').value
    console.log(newMessage)
    db.get('messages').then(doc => {
      doc.messages.push(newMessage)
      return db.put(doc)
    }).catch(error => {
      console.log(err)
    })
  })
import webapp2
from google.appengine.api import users
from storage.py import Author
goog.require('BlocklyGames')  #this is javascript 

class MyHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
			author = Author("", "")
			author_query = Author.query(Author.identity==user.user_id()).order(-Author.date)
			currentUser = author_query.fetch(1)
			blockKey = currentUser.block_key
			
            self.response.out.write("<html><head><meta http-equiv='refresh' content='0; url=/movie?lang=en&level=%s#%s'></head></html>"
				% BlocklyGames.LEVEL, blockKey)
        else:
			self.response.out.write("<html><body><a href='%s'>Sign in or register</a></body></html>" %
                        users.create_login_url('/movie'))

 #add code to query datastore?        
application = webapp2.WSGIApplication([('/login', MyHandler),], debug=True)
import webapp2
from google.appengine.api import users
from google.appengine.ext import db
from storage import Author


class MyHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
		  author_query = Author.all()
		  author_query.filter("identity =", user.user_id())
		  author_query.order("-date")
		  for currentUser in author_query.run(limit=1):
		    blockKey = currentUser.block_key
		    level = currentUser.level
		    self.response.out.write("<html><head><meta http-equiv='refresh' content='0; url=/movie?lang=en&level=%s#%s'></head></html>"
			  % (level, blockKey))
		    
        else:
			self.response.out.write("<html><body><a href='%s'>Sign in or register</a></body></html>" %
                        users.create_login_url('/movie'))
      
application = webapp2.WSGIApplication([('/login', MyHandler),], debug=True)
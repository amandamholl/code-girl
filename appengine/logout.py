import webapp2
from google.appengine.api import users
from google.appengine.ext import db
from storage import Author


class MyHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
		    self.response.out.write("<html><head><meta http-equiv='refresh' content='0; url=%s'></head></html>"
			  % users.create_logout_url('/'))
		
      
application = webapp2.WSGIApplication([('/logout', MyHandler),], debug=True)
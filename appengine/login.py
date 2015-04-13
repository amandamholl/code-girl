import webapp2
from google.appengine.api import users

class MyHandler(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            self.response.out.write("<html><head><meta http-equiv='refresh' content='0; url=/movie'></head></html>")
        else:
			self.response.out.write("<html><body><a href='%s'>Sign in or register</a></body></html>" %
                        users.create_login_url('/movie'))

 #add code to query datastore?        
application = webapp2.WSGIApplication([('/login', MyHandler),], debug=True)
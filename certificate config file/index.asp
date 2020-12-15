<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "autoplate.net" or host = "www.autoplate.net" then
response.redirect("https://www.autoplate.net/")

else
response.redirect("https://www.autoplate.net/error.htm")

end if
%>
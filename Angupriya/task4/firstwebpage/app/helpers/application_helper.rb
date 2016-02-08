# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def gravatar_url(email, size)
    gravatar = Digest::MD5::hexdigest(email).downcase
    default_url = 'pic.jpg'
    url = "http://gravatar.com/avatar/#{gravatar}.png?s=#{size}"
  end


end

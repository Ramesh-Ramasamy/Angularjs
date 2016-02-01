class WithoutcontinentsController < ApplicationController
	layout "countries"
  def index
  	@withoutcontinents = Withoutcontinent.all
  	render :layout => false
  end 

  def show
  	@country = Withoutcontinent.find(params[:id])
  end

end

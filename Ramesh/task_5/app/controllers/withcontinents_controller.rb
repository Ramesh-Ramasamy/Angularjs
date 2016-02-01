class WithcontinentsController < ApplicationController
  layout "countries"
  def index
  	@withcontinents = Withcontinent.all
  	render :layout => false
  end
  def show
  	@country = Withcontinent.find(params[:id])  	
  end
end

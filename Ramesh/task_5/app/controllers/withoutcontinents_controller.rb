class WithoutcontinentsController < ApplicationController
	
  def index
  	@withoutcontinents = Withoutcontinent.all
	respond_to do |format|      
	  format.json  { render :json => @withoutcontinents }
	end 
  end 

  def show
  	@country = Withoutcontinent.find(params[:id])
  end

end

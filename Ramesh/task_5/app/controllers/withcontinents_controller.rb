class WithcontinentsController < ApplicationController
  
  def index
  	@withcontinents = Withcontinent.all
  	respond_to do |format|      
      format.json  { render :json => @withcontinents }
    end
  end
  def show
  	@country = Withcontinent.find(params[:id])  	
  end
end

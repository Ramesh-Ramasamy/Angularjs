class WithoutcontinentsController < ApplicationController
  def index
  	@withoutcontinents = Withoutcontinent.all
  end 

  def show
  	@country = Withoutcontinent.find(params[:id])
  end

end

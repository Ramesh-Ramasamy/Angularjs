class WithcontinentsController < ApplicationController
  def index
  	@withcontinents = Withcontinent.all
  end
  def show
  	@country = Withcontinent.find(params[:id])
  end
end

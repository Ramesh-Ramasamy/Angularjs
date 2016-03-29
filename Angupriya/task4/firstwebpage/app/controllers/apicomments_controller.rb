class ApicommentsController < ApplicationController
  # def create
  #     @createpost = Counter.find(params[:id])
  #     @createpost.name = params[:name]
  #     @createpost.content = params[:comments]
  #     saved = @createpost.save!
  #     if saved
  #     respond_to do |format|
  #           format.json {render :json => @createpost}
  #       end
  #     end
  # end

  def show
   @c=Comment.all(:conditions => {:counter_id => params[:id]})
   respond_to do |format|
      format.json { render :json=> @c }
    end
 end
end

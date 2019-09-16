class ConceptsController < ApplicationController
  def index
    @concepts = Concept.all
    render json: @concepts, only: [:id, :noun_id, :adjective_id  ], methods: :name
  end

  def create
    @concept = Concept.new(noun_id: params[:noun_id], adjective_id: params[:adjective_id])
    if @concept.save
      render json: @concept
    else
      render json: {status: "error", code: 400, message: @concept.errors.full_messages}
    end
  end
end

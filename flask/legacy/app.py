from flask import Flask, jsonify, request
from pydantic import BaseModel, ValidationError

# __name__은 현재 모듈의 이름을 전달하는 것으로,
# Flask가 템플릿이나 정적 파일 등의 위치를 찾을 때 사용합니다.
app = Flask(__name__)


# @app.route()는 데코레이터입니다.
# 특정 URL에 접근했을 때 실행할 함수를 등록합니다.
@app.route("/")
def home():
    return "Hello, Flassk!"


# GET /users?name=kim
@app.route("/users", methods=["GET"])
def get_users():
    name = request.args.get("name")

    return jsonify({"name": name})


# GET /users/123
@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    return jsonify({"id": user_id})


class UserCreate(BaseModel):
    name: str
    age: int


# POST /users
@app.route("/users", methods=["POST"])
def create_user():
    # data = request.get_json()
    # name = data.get("name")
    # ------------------------
    # data = request.get_json(silent=True)

    # if not isinstance(data, dict):
    #     return jsonify({"error": "Invalid JSON body"}), 400

    # name = data.get("name")

    # if not isinstance(name, str) or not name.strip():
    #     return jsonify({"error": "Name is required"}), 400

    # return jsonify({"message": "User created", "name": name}), 201

    try:
        user = UserCreate.model_validate(request.get_json())
    except ValidationError as e:
        return jsonify({"error": e.errors()}), 400

    return jsonify({"name": user.name, "age": user.age}), 201


@app.route("/api/test")
def test():
    return jsonify({"success": True, "data": [1, 2, 3]}), 200


if __name__ == "__main__":
    app.run(debug=True)

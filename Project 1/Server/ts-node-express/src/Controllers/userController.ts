import User from "../Models/userModel";
export const getUsers = async (req: any, res: any) => {
  try {
    User.read(function (user: any) {
      if (user) {
        res.json({ user });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

export const createUser = async (req: any, res: any) => {
  try {
    if (!req.body.firstName || !req.body.lastName || !req.body.password) {
      return res.status(422).json({
        message: "enter proper input",
      });
    }
    const user = new User(req.body);
    User.create(user, function (err: any, user: any) {
      res.json({ user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

export const findById = async (req: any, res: any) => {
  try {
    if (!req.params.user_id) {
      return res.status(422).json({
        user_id: "user_id is required",
      });
    }
    const user_id = req.params.user_id;
    User.findById(user_id, function (user: any, err) {
      if (user) {
        res.json({ user });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    if (!req.params.user_id) {
      return res.status(422).json({
        user_id: "user_id is required",
      });
    }
    const user_id = req.params.user_id;
    const user = new User(req.body);
    User.update(user_id, user, function ( user: any, err) {
      if (user) {
        res.json({ user });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    if (!req.params.user_id) {
      return res.status(422).json({
        user_id: "user_id is required",
      });
    }
    const user_id = req.params.user_id;
    User.delete(user_id, function ( user: any, err) {
      if (user) {
        res.json({ user });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

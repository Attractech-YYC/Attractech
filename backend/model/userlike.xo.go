package model

// Code generated by xo. DO NOT EDIT.

import (
	"context"
	"time"
)

// UserLike represents a row from 'Attractech.user_like'.
type UserLike struct {
	ID           uint64    `json:"id"`             // id
	UpdatedAt    time.Time `json:"updated_at"`     // updated_at
	CreatedAt    time.Time `json:"created_at"`     // created_at
	UserID       uint64    `json:"user_id"`        // user_id
	UserPublicID string    `json:"user_public_id"` // user_public_id
	ActivityID   uint64    `json:"activity_id"`    // activity_id
	// xo fields
	_exists, _deleted bool
}

// Exists returns true when the UserLike exists in the database.
func (ul *UserLike) Exists() bool {
	return ul._exists
}

// Deleted returns true when the UserLike has been marked for deletion from
// the database.
func (ul *UserLike) Deleted() bool {
	return ul._deleted
}

// Insert inserts the UserLike to the database.
func (ul *UserLike) Insert(ctx context.Context, db DB) error {
	switch {
	case ul._exists: // already exists
		return logerror(&ErrInsertFailed{ErrAlreadyExists})
	case ul._deleted: // deleted
		return logerror(&ErrInsertFailed{ErrMarkedForDeletion})
	}
	// insert (primary key generated and returned by database)
	const sqlstr = `INSERT INTO Attractech.user_like (` +
		`updated_at, created_at, user_id, user_public_id, activity_id` +
		`) VALUES (` +
		`?, ?, ?, ?, ?` +
		`)`
	// run
	logf(sqlstr, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID)
	res, err := db.ExecContext(ctx, sqlstr, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID)
	if err != nil {
		return logerror(err)
	}
	// retrieve id
	id, err := res.LastInsertId()
	if err != nil {
		return logerror(err)
	} // set primary key
	ul.ID = uint64(id)
	// set exists
	ul._exists = true
	return nil
}

// Update updates a UserLike in the database.
func (ul *UserLike) Update(ctx context.Context, db DB) error {
	switch {
	case !ul._exists: // doesn't exist
		return logerror(&ErrUpdateFailed{ErrDoesNotExist})
	case ul._deleted: // deleted
		return logerror(&ErrUpdateFailed{ErrMarkedForDeletion})
	}
	// update with primary key
	const sqlstr = `UPDATE Attractech.user_like SET ` +
		`updated_at = ?, created_at = ?, user_id = ?, user_public_id = ?, activity_id = ? ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID, ul.ID)
	if _, err := db.ExecContext(ctx, sqlstr, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID, ul.ID); err != nil {
		return logerror(err)
	}
	return nil
}

// Save saves the UserLike to the database.
func (ul *UserLike) Save(ctx context.Context, db DB) error {
	if ul.Exists() {
		return ul.Update(ctx, db)
	}
	return ul.Insert(ctx, db)
}

// Upsert performs an upsert for UserLike.
func (ul *UserLike) Upsert(ctx context.Context, db DB) error {
	switch {
	case ul._deleted: // deleted
		return logerror(&ErrUpsertFailed{ErrMarkedForDeletion})
	}
	// upsert
	const sqlstr = `INSERT INTO Attractech.user_like (` +
		`id, updated_at, created_at, user_id, user_public_id, activity_id` +
		`) VALUES (` +
		`?, ?, ?, ?, ?, ?` +
		`)` +
		` ON DUPLICATE KEY UPDATE ` +
		`updated_at = VALUES(updated_at), created_at = VALUES(created_at), user_id = VALUES(user_id), user_public_id = VALUES(user_public_id), activity_id = VALUES(activity_id)`
	// run
	logf(sqlstr, ul.ID, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID)
	if _, err := db.ExecContext(ctx, sqlstr, ul.ID, ul.UpdatedAt, ul.CreatedAt, ul.UserID, ul.UserPublicID, ul.ActivityID); err != nil {
		return logerror(err)
	}
	// set exists
	ul._exists = true
	return nil
}

// Delete deletes the UserLike from the database.
func (ul *UserLike) Delete(ctx context.Context, db DB) error {
	switch {
	case !ul._exists: // doesn't exist
		return nil
	case ul._deleted: // deleted
		return nil
	}
	// delete with single primary key
	const sqlstr = `DELETE FROM Attractech.user_like ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, ul.ID)
	if _, err := db.ExecContext(ctx, sqlstr, ul.ID); err != nil {
		return logerror(err)
	}
	// set deleted
	ul._deleted = true
	return nil
}

// UserLikeByActivityID retrieves a row from 'Attractech.user_like' as a UserLike.
//
// Generated from index 'aid'.
func UserLikeByActivityID(ctx context.Context, db DB, activityID uint64) ([]*UserLike, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, user_id, user_public_id, activity_id ` +
		`FROM Attractech.user_like ` +
		`WHERE activity_id = ?`
	// run
	logf(sqlstr, activityID)
	rows, err := db.QueryContext(ctx, sqlstr, activityID)
	if err != nil {
		return nil, logerror(err)
	}
	defer rows.Close()
	// process
	var res []*UserLike
	for rows.Next() {
		ul := UserLike{
			_exists: true,
		}
		// scan
		if err := rows.Scan(&ul.ID, &ul.UpdatedAt, &ul.CreatedAt, &ul.UserID, &ul.UserPublicID, &ul.ActivityID); err != nil {
			return nil, logerror(err)
		}
		res = append(res, &ul)
	}
	if err := rows.Err(); err != nil {
		return nil, logerror(err)
	}
	return res, nil
}

// UserLikeByUserID retrieves a row from 'Attractech.user_like' as a UserLike.
//
// Generated from index 'uid'.
func UserLikeByUserID(ctx context.Context, db DB, userID uint64) ([]*UserLike, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, user_id, user_public_id, activity_id ` +
		`FROM Attractech.user_like ` +
		`WHERE user_id = ?`
	// run
	logf(sqlstr, userID)
	rows, err := db.QueryContext(ctx, sqlstr, userID)
	if err != nil {
		return nil, logerror(err)
	}
	defer rows.Close()
	// process
	var res []*UserLike
	for rows.Next() {
		ul := UserLike{
			_exists: true,
		}
		// scan
		if err := rows.Scan(&ul.ID, &ul.UpdatedAt, &ul.CreatedAt, &ul.UserID, &ul.UserPublicID, &ul.ActivityID); err != nil {
			return nil, logerror(err)
		}
		res = append(res, &ul)
	}
	if err := rows.Err(); err != nil {
		return nil, logerror(err)
	}
	return res, nil
}

// UserLikeByID retrieves a row from 'Attractech.user_like' as a UserLike.
//
// Generated from index 'user_like_id_pkey'.
func UserLikeByID(ctx context.Context, db DB, id uint64) (*UserLike, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, user_id, user_public_id, activity_id ` +
		`FROM Attractech.user_like ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, id)
	ul := UserLike{
		_exists: true,
	}
	if err := db.QueryRowContext(ctx, sqlstr, id).Scan(&ul.ID, &ul.UpdatedAt, &ul.CreatedAt, &ul.UserID, &ul.UserPublicID, &ul.ActivityID); err != nil {
		return nil, logerror(err)
	}
	return &ul, nil
}

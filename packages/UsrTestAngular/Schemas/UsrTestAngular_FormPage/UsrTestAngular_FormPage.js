define("UsrTestAngular_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Demo_7ob08c0",
				"values": {
					"type": "usr.Demo"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CardButtonToggleGroup",
				"values": {
					"for": "CardToggleTabPanel",
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "LeftAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"layoutConfig": {
						"basis": "100%",
						"maxWidth": 370,
						"minWidth": 370
					},
					"classes": [
						"container-background-color-primary",
						"container-border-area"
					]
				},
				"parentName": "RightAreaContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"iconPosition": "only-text",
					"tools": []
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_Attachments",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$FileList_Attachments",
					"primaryColumnName": "FileList_AttachmentsDS_Id",
					"columns": [
						{
							"id": "8cd25bbb-dbba-45dd-b7d0-209936b943f7",
							"code": "FileList_AttachmentsDS_Name",
							"caption": "#ResourceString(FileList_AttachmentsDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_Attachments",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_Attachments_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_Attachments"
						}
					}
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_Attachments",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_Attachments_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "FileList_AttachmentsDS"
						}
					}
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeedTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"tools": [],
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"iconPosition": "only-text"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CardFeed",
				"values": {
					"type": "crt.Feed",
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrTestAngular"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "FeedTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FeedTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"FileList_Attachments": {
					"isCollection": true,
					"modelConfig": {
						"path": "FileList_AttachmentsDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "CreatedOn",
									"direction": "desc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"FileList_AttachmentsDS_Name": {
								"modelConfig": {
									"path": "FileList_AttachmentsDS.Name"
								}
							},
							"FileList_AttachmentsDS_CreatedOn": {
								"modelConfig": {
									"path": "FileList_AttachmentsDS.CreatedOn"
								}
							},
							"FileList_AttachmentsDS_CreatedBy": {
								"modelConfig": {
									"path": "FileList_AttachmentsDS.CreatedBy"
								}
							},
							"FileList_AttachmentsDS_Size": {
								"modelConfig": {
									"path": "FileList_AttachmentsDS.Size"
								}
							},
							"FileList_AttachmentsDS_Id": {
								"modelConfig": {
									"path": "FileList_AttachmentsDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrTestAngular"
					},
					"scope": "page"
				},
				"FileList_AttachmentsDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
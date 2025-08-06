# `cleanRoomAsset` Submodule <a name="`cleanRoomAsset` Submodule" id="@cdktf/provider-databricks.cleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanRoomAsset <a name="CleanRoomAsset" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  name: str,
  clean_room_name: str = None,
  foreign_table: CleanRoomAssetForeignTable = None,
  foreign_table_local_details: CleanRoomAssetForeignTableLocalDetails = None,
  notebook: CleanRoomAssetNotebook = None,
  table: CleanRoomAssetTable = None,
  table_local_details: CleanRoomAssetTableLocalDetails = None,
  view: CleanRoomAssetView = None,
  view_local_details: CleanRoomAssetViewLocalDetails = None,
  volume_local_details: CleanRoomAssetVolumeLocalDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.assetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.cleanRoomName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}.

---

##### `foreign_table`<sup>Optional</sup> <a name="foreign_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTable"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}.

---

##### `foreign_table_local_details`<sup>Optional</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.foreignTableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}.

---

##### `table_local_details`<sup>Optional</sup> <a name="table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.tableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}.

---

##### `view_local_details`<sup>Optional</sup> <a name="view_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.viewLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}.

---

##### `volume_local_details`<sup>Optional</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.volumeLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable">put_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails">put_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails">put_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails">put_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails">put_volume_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName">reset_clean_room_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable">reset_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails">reset_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails">reset_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView">reset_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails">reset_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails">reset_volume_local_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_foreign_table` <a name="put_foreign_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable"></a>

```python
def put_foreign_table() -> None
```

##### `put_foreign_table_local_details` <a name="put_foreign_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails"></a>

```python
def put_foreign_table_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook"></a>

```python
def put_notebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
) -> None
```

###### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook.parameter.notebookContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}.

---

###### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook.parameter.runnerCollaboratorAliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}.

---

##### `put_table` <a name="put_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable"></a>

```python
def put_table() -> None
```

##### `put_table_local_details` <a name="put_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails"></a>

```python
def put_table_local_details(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]] = None
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

###### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails.parameter.partitions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}.

---

##### `put_view` <a name="put_view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView"></a>

```python
def put_view() -> None
```

##### `put_view_local_details` <a name="put_view_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails"></a>

```python
def put_view_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `put_volume_local_details` <a name="put_volume_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails"></a>

```python
def put_volume_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `reset_clean_room_name` <a name="reset_clean_room_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName"></a>

```python
def reset_clean_room_name() -> None
```

##### `reset_foreign_table` <a name="reset_foreign_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable"></a>

```python
def reset_foreign_table() -> None
```

##### `reset_foreign_table_local_details` <a name="reset_foreign_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails"></a>

```python
def reset_foreign_table_local_details() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_local_details` <a name="reset_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails"></a>

```python
def reset_table_local_details() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView"></a>

```python
def reset_view() -> None
```

##### `reset_view_local_details` <a name="reset_view_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails"></a>

```python
def reset_view_local_details() -> None
```

##### `reset_volume_local_details` <a name="reset_volume_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails"></a>

```python
def reset_volume_local_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAsset.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanRoomAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt">added_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias">owner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput">clean_room_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput">foreign_table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput">foreign_table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput">notebook_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput">table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput">view_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput">view_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput">volume_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt"></a>

```python
added_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `foreign_table`<sup>Required</sup> <a name="foreign_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable"></a>

```python
foreign_table: CleanRoomAssetForeignTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a>

---

##### `foreign_table_local_details`<sup>Required</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: CleanRoomAssetForeignTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook"></a>

```python
notebook: CleanRoomAssetNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a>

---

##### `owner_collaborator_alias`<sup>Required</sup> <a name="owner_collaborator_alias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias"></a>

```python
owner_collaborator_alias: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table"></a>

```python
table: CleanRoomAssetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a>

---

##### `table_local_details`<sup>Required</sup> <a name="table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails"></a>

```python
table_local_details: CleanRoomAssetTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view"></a>

```python
view: CleanRoomAssetViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a>

---

##### `view_local_details`<sup>Required</sup> <a name="view_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails"></a>

```python
view_local_details: CleanRoomAssetViewLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `volume_local_details`<sup>Required</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails"></a>

```python
volume_local_details: CleanRoomAssetVolumeLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `clean_room_name_input`<sup>Optional</sup> <a name="clean_room_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput"></a>

```python
clean_room_name_input: str
```

- *Type:* str

---

##### `foreign_table_input`<sup>Optional</sup> <a name="foreign_table_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput"></a>

```python
foreign_table_input: typing.Union[IResolvable, CleanRoomAssetForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>]

---

##### `foreign_table_local_details_input`<sup>Optional</sup> <a name="foreign_table_local_details_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```python
foreign_table_local_details_input: typing.Union[IResolvable, CleanRoomAssetForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput"></a>

```python
notebook_input: typing.Union[IResolvable, CleanRoomAssetNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, CleanRoomAssetTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>]

---

##### `table_local_details_input`<sup>Optional</sup> <a name="table_local_details_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput"></a>

```python
table_local_details_input: typing.Union[IResolvable, CleanRoomAssetTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>]

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput"></a>

```python
view_input: typing.Union[IResolvable, CleanRoomAssetView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>]

---

##### `view_local_details_input`<sup>Optional</sup> <a name="view_local_details_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput"></a>

```python
view_local_details_input: typing.Union[IResolvable, CleanRoomAssetViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>]

---

##### `volume_local_details_input`<sup>Optional</sup> <a name="volume_local_details_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput"></a>

```python
volume_local_details_input: typing.Union[IResolvable, CleanRoomAssetVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `clean_room_name`<sup>Required</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanRoomAssetConfig <a name="CleanRoomAssetConfig" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  name: str,
  clean_room_name: str = None,
  foreign_table: CleanRoomAssetForeignTable = None,
  foreign_table_local_details: CleanRoomAssetForeignTableLocalDetails = None,
  notebook: CleanRoomAssetNotebook = None,
  table: CleanRoomAssetTable = None,
  table_local_details: CleanRoomAssetTableLocalDetails = None,
  view: CleanRoomAssetView = None,
  view_local_details: CleanRoomAssetViewLocalDetails = None,
  volume_local_details: CleanRoomAssetVolumeLocalDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}.

---

##### `foreign_table`<sup>Optional</sup> <a name="foreign_table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable"></a>

```python
foreign_table: CleanRoomAssetForeignTable
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}.

---

##### `foreign_table_local_details`<sup>Optional</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: CleanRoomAssetForeignTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook"></a>

```python
notebook: CleanRoomAssetNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table"></a>

```python
table: CleanRoomAssetTable
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}.

---

##### `table_local_details`<sup>Optional</sup> <a name="table_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails"></a>

```python
table_local_details: CleanRoomAssetTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view"></a>

```python
view: CleanRoomAssetView
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}.

---

##### `view_local_details`<sup>Optional</sup> <a name="view_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails"></a>

```python
view_local_details: CleanRoomAssetViewLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}.

---

##### `volume_local_details`<sup>Optional</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails"></a>

```python
volume_local_details: CleanRoomAssetVolumeLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}.

---

### CleanRoomAssetForeignTable <a name="CleanRoomAssetForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTable()
```


### CleanRoomAssetForeignTableColumns <a name="CleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableColumns(
  comment: str = None,
  mask: CleanRoomAssetForeignTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask"></a>

```python
mask: CleanRoomAssetForeignTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetForeignTableColumnsMask <a name="CleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetForeignTableLocalDetails <a name="CleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetNotebook <a name="CleanRoomAssetNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetNotebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent">notebook_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}. |

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}.

---

##### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}.

---

### CleanRoomAssetNotebookReviews <a name="CleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetNotebookReviews(
  comment: str = None,
  created_at_millis: typing.Union[int, float] = None,
  reviewer_collaborator_alias: str = None,
  review_state: str = None,
  review_sub_reason: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState">review_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `created_at_millis`<sup>Optional</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}.

---

##### `reviewer_collaborator_alias`<sup>Optional</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}.

---

##### `review_state`<sup>Optional</sup> <a name="review_state" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}.

---

##### `review_sub_reason`<sup>Optional</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}.

---

### CleanRoomAssetTable <a name="CleanRoomAssetTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTable()
```


### CleanRoomAssetTableColumns <a name="CleanRoomAssetTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableColumns(
  comment: str = None,
  mask: CleanRoomAssetTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask"></a>

```python
mask: CleanRoomAssetTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetTableColumnsMask <a name="CleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetTableLocalDetails <a name="CleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetails(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions">partitions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions"></a>

```python
partitions: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}.

---

### CleanRoomAssetTableLocalDetailsPartitions <a name="CleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions(
  value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitionsValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value">value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```python
value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetTableLocalDetailsPartitionsValue <a name="CleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue(
  name: str = None,
  op: str = None,
  recipient_property_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#op CleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#op CleanRoomAsset#op}.

---

##### `recipient_property_key`<sup>Optional</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetView <a name="CleanRoomAssetView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetView()
```


### CleanRoomAssetViewColumns <a name="CleanRoomAssetViewColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewColumns(
  comment: str = None,
  mask: CleanRoomAssetViewColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask"></a>

```python
mask: CleanRoomAssetViewColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetViewColumnsMask <a name="CleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetViewLocalDetails <a name="CleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetVolumeLocalDetails <a name="CleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetVolumeLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanRoomAssetForeignTableColumnsList <a name="CleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetForeignTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetForeignTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>]]

---


### CleanRoomAssetForeignTableColumnsMaskOutputReference <a name="CleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>]

---


### CleanRoomAssetForeignTableColumnsOutputReference <a name="CleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```python
mask: CleanRoomAssetForeignTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, CleanRoomAssetForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: CleanRoomAssetForeignTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>

---


### CleanRoomAssetForeignTableLocalDetailsOutputReference <a name="CleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>]

---


### CleanRoomAssetForeignTableOutputReference <a name="CleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetForeignTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns"></a>

```python
columns: CleanRoomAssetForeignTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>]

---


### CleanRoomAssetNotebookOutputReference <a name="CleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">reset_runner_collaborator_aliases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_runner_collaborator_aliases` <a name="reset_runner_collaborator_aliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```python
def reset_runner_collaborator_aliases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput">notebook_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">runner_collaborator_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent">notebook_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews"></a>

```python
reviews: CleanRoomAssetNotebookReviewsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a>

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `notebook_content_input`<sup>Optional</sup> <a name="notebook_content_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```python
notebook_content_input: str
```

- *Type:* str

---

##### `runner_collaborator_aliases_input`<sup>Optional</sup> <a name="runner_collaborator_aliases_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```python
runner_collaborator_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

---

##### `runner_collaborator_aliases`<sup>Required</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>]

---


### CleanRoomAssetNotebookReviewsList <a name="CleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetNotebookReviewsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetNotebookReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetNotebookReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>]]

---


### CleanRoomAssetNotebookReviewsOutputReference <a name="CleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">reset_created_at_millis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">reset_reviewer_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState">reset_review_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">reset_review_sub_reason</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at_millis` <a name="reset_created_at_millis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```python
def reset_created_at_millis() -> None
```

##### `reset_reviewer_collaborator_alias` <a name="reset_reviewer_collaborator_alias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```python
def reset_reviewer_collaborator_alias() -> None
```

##### `reset_review_state` <a name="reset_review_state" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```python
def reset_review_state() -> None
```

##### `reset_review_sub_reason` <a name="reset_review_sub_reason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```python
def reset_review_sub_reason() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">created_at_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewer_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">review_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">review_sub_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_millis_input`<sup>Optional</sup> <a name="created_at_millis_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```python
created_at_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias_input`<sup>Optional</sup> <a name="reviewer_collaborator_alias_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```python
reviewer_collaborator_alias_input: str
```

- *Type:* str

---

##### `review_state_input`<sup>Optional</sup> <a name="review_state_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```python
review_state_input: str
```

- *Type:* str

---

##### `review_sub_reason_input`<sup>Optional</sup> <a name="review_sub_reason_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```python
review_sub_reason_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at_millis`<sup>Required</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias`<sup>Required</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `review_sub_reason`<sup>Required</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```python
internal_value: CleanRoomAssetNotebookReviews
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>

---


### CleanRoomAssetTableColumnsList <a name="CleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>]]

---


### CleanRoomAssetTableColumnsMaskOutputReference <a name="CleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>]

---


### CleanRoomAssetTableColumnsOutputReference <a name="CleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```python
mask: CleanRoomAssetTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, CleanRoomAssetTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: CleanRoomAssetTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>

---


### CleanRoomAssetTableLocalDetailsOutputReference <a name="CleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions">put_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">reset_partitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partitions` <a name="put_partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```python
def put_partitions(
  value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]

---

##### `reset_partitions` <a name="reset_partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```python
def reset_partitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">partitions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```python
partitions: CleanRoomAssetTableLocalDetailsPartitionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `partitions_input`<sup>Optional</sup> <a name="partitions_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```python
partitions_input: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>]

---


### CleanRoomAssetTableLocalDetailsPartitionsList <a name="CleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetTableLocalDetailsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]]

---


### CleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```python
def put_value(
  value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitionsValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```python
value: CleanRoomAssetTableLocalDetailsPartitionsValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetTableLocalDetailsPartitions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions">CleanRoomAssetTableLocalDetailsPartitions</a>]

---


### CleanRoomAssetTableLocalDetailsPartitionsValueList <a name="CleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---


### CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">reset_op</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">reset_recipient_property_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_op` <a name="reset_op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```python
def reset_op() -> None
```

##### `reset_recipient_property_key` <a name="reset_recipient_property_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```python
def reset_recipient_property_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipient_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `recipient_property_key_input`<sup>Optional</sup> <a name="recipient_property_key_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```python
recipient_property_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `recipient_property_key`<sup>Required</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetTableLocalDetailsPartitionsValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue">CleanRoomAssetTableLocalDetailsPartitionsValue</a>]

---


### CleanRoomAssetTableOutputReference <a name="CleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns"></a>

```python
columns: CleanRoomAssetTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>]

---


### CleanRoomAssetViewColumnsList <a name="CleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanRoomAssetViewColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CleanRoomAssetViewColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>]]

---


### CleanRoomAssetViewColumnsMaskOutputReference <a name="CleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>]

---


### CleanRoomAssetViewColumnsOutputReference <a name="CleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```python
mask: CleanRoomAssetViewColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, CleanRoomAssetViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```python
internal_value: CleanRoomAssetViewColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>

---


### CleanRoomAssetViewLocalDetailsOutputReference <a name="CleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>]

---


### CleanRoomAssetViewOutputReference <a name="CleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns"></a>

```python
columns: CleanRoomAssetViewColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>]

---


### CleanRoomAssetVolumeLocalDetailsOutputReference <a name="CleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import clean_room_asset

cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CleanRoomAssetVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>]

---




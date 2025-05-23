# `dashboard` Submodule <a name="`dashboard` Submodule" id="@cdktf/provider-databricks.dashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="@cdktf/provider-databricks.dashboard.Dashboard"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard databricks_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.Dashboard(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  parent_path: str,
  warehouse_id: str,
  create_time: str = None,
  dashboard_change_detected: typing.Union[bool, IResolvable] = None,
  dashboard_id: str = None,
  embed_credentials: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  file_path: str = None,
  id: str = None,
  lifecycle_state: str = None,
  md5: str = None,
  path: str = None,
  serialized_dashboard: str = None,
  update_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#display_name Dashboard#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#parent_path Dashboard#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#create_time Dashboard#create_time}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dashboardChangeDetected">dashboard_change_detected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.embedCredentials">embed_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#etag Dashboard#etag}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#file_path Dashboard#file_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#id Dashboard#id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.lifecycleState">lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#md5 Dashboard#md5}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#path Dashboard#path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.serializedDashboard">serialized_dashboard</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.updateTime">update_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#update_time Dashboard#update_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#display_name Dashboard#display_name}.

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.parentPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#parent_path Dashboard#parent_path}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.createTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#create_time Dashboard#create_time}.

---

##### `dashboard_change_detected`<sup>Optional</sup> <a name="dashboard_change_detected" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dashboardChangeDetected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}.

---

##### `dashboard_id`<sup>Optional</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.dashboardId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}.

---

##### `embed_credentials`<sup>Optional</sup> <a name="embed_credentials" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.embedCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#etag Dashboard#etag}.

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.filePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#file_path Dashboard#file_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#id Dashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_state`<sup>Optional</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.lifecycleState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.md5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#md5 Dashboard#md5}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#path Dashboard#path}.

---

##### `serialized_dashboard`<sup>Optional</sup> <a name="serialized_dashboard" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.serializedDashboard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-databricks.dashboard.Dashboard.Initializer.parameter.updateTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#update_time Dashboard#update_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected">reset_dashboard_change_detected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardId">reset_dashboard_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetEmbedCredentials">reset_embed_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetLifecycleState">reset_lifecycle_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetMd5">reset_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetSerializedDashboard">reset_serialized_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.resetUpdateTime">reset_update_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dashboard.Dashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dashboard.Dashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dashboard.Dashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dashboard.Dashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dashboard.Dashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dashboard.Dashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.dashboard.Dashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.dashboard.Dashboard.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dashboard.Dashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.dashboard.Dashboard.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-databricks.dashboard.Dashboard.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_dashboard_change_detected` <a name="reset_dashboard_change_detected" id="@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected"></a>

```python
def reset_dashboard_change_detected() -> None
```

##### `reset_dashboard_id` <a name="reset_dashboard_id" id="@cdktf/provider-databricks.dashboard.Dashboard.resetDashboardId"></a>

```python
def reset_dashboard_id() -> None
```

##### `reset_embed_credentials` <a name="reset_embed_credentials" id="@cdktf/provider-databricks.dashboard.Dashboard.resetEmbedCredentials"></a>

```python
def reset_embed_credentials() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.dashboard.Dashboard.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-databricks.dashboard.Dashboard.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dashboard.Dashboard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_state` <a name="reset_lifecycle_state" id="@cdktf/provider-databricks.dashboard.Dashboard.resetLifecycleState"></a>

```python
def reset_lifecycle_state() -> None
```

##### `reset_md5` <a name="reset_md5" id="@cdktf/provider-databricks.dashboard.Dashboard.resetMd5"></a>

```python
def reset_md5() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-databricks.dashboard.Dashboard.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_serialized_dashboard` <a name="reset_serialized_dashboard" id="@cdktf/provider-databricks.dashboard.Dashboard.resetSerializedDashboard"></a>

```python
def reset_serialized_dashboard() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-databricks.dashboard.Dashboard.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dashboard.Dashboard.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.Dashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.Dashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.Dashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dashboard.Dashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.Dashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Dashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Dashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Dashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput">dashboard_change_detected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardIdInput">dashboard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput">embed_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput">lifecycle_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.md5Input">md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput">serialized_dashboard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected">dashboard_change_detected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentials">embed_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.md5">md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboard">serialized_dashboard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dashboard.Dashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dashboard.Dashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dashboard.Dashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dashboard.Dashboard.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dashboard.Dashboard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dashboard.Dashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.Dashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dashboard.Dashboard.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `dashboard_change_detected_input`<sup>Optional</sup> <a name="dashboard_change_detected_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput"></a>

```python
dashboard_change_detected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dashboard_id_input`<sup>Optional</sup> <a name="dashboard_id_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardIdInput"></a>

```python
dashboard_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `embed_credentials_input`<sup>Optional</sup> <a name="embed_credentials_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput"></a>

```python
embed_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_state_input`<sup>Optional</sup> <a name="lifecycle_state_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput"></a>

```python
lifecycle_state_input: str
```

- *Type:* str

---

##### `md5_input`<sup>Optional</sup> <a name="md5_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.md5Input"></a>

```python
md5_input: str
```

- *Type:* str

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `serialized_dashboard_input`<sup>Optional</sup> <a name="serialized_dashboard_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput"></a>

```python
serialized_dashboard_input: str
```

- *Type:* str

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dashboard.Dashboard.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dashboard_change_detected`<sup>Required</sup> <a name="dashboard_change_detected" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected"></a>

```python
dashboard_change_detected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.dashboard.Dashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dashboard.Dashboard.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `embed_credentials`<sup>Required</sup> <a name="embed_credentials" id="@cdktf/provider-databricks.dashboard.Dashboard.property.embedCredentials"></a>

```python
embed_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dashboard.Dashboard.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-databricks.dashboard.Dashboard.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.Dashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dashboard.Dashboard.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktf/provider-databricks.dashboard.Dashboard.property.md5"></a>

```python
md5: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dashboard.Dashboard.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.Dashboard.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `serialized_dashboard`<sup>Required</sup> <a name="serialized_dashboard" id="@cdktf/provider-databricks.dashboard.Dashboard.property.serializedDashboard"></a>

```python
serialized_dashboard: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dashboard.Dashboard.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dashboard.Dashboard.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.Dashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dashboard.Dashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardConfig <a name="DashboardConfig" id="@cdktf/provider-databricks.dashboard.DashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dashboard.DashboardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import dashboard

dashboard.DashboardConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  parent_path: str,
  warehouse_id: str,
  create_time: str = None,
  dashboard_change_detected: typing.Union[bool, IResolvable] = None,
  dashboard_id: str = None,
  embed_credentials: typing.Union[bool, IResolvable] = None,
  etag: str = None,
  file_path: str = None,
  id: str = None,
  lifecycle_state: str = None,
  md5: str = None,
  path: str = None,
  serialized_dashboard: str = None,
  update_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#display_name Dashboard#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#parent_path Dashboard#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.createTime">create_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#create_time Dashboard#create_time}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected">dashboard_change_detected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.embedCredentials">embed_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#etag Dashboard#etag}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.filePath">file_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#file_path Dashboard#file_path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#id Dashboard#id}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#md5 Dashboard#md5}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#path Dashboard#path}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard">serialized_dashboard</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dashboard.DashboardConfig.property.updateTime">update_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#update_time Dashboard#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#display_name Dashboard#display_name}.

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#parent_path Dashboard#parent_path}.

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}.

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#create_time Dashboard#create_time}.

---

##### `dashboard_change_detected`<sup>Optional</sup> <a name="dashboard_change_detected" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected"></a>

```python
dashboard_change_detected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}.

---

##### `dashboard_id`<sup>Optional</sup> <a name="dashboard_id" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}.

---

##### `embed_credentials`<sup>Optional</sup> <a name="embed_credentials" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.embedCredentials"></a>

```python
embed_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#etag Dashboard#etag}.

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#file_path Dashboard#file_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#id Dashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_state`<sup>Optional</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.md5"></a>

```python
md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#md5 Dashboard#md5}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#path Dashboard#path}.

---

##### `serialized_dashboard`<sup>Optional</sup> <a name="serialized_dashboard" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard"></a>

```python
serialized_dashboard: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}.

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-databricks.dashboard.DashboardConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/dashboard#update_time Dashboard#update_time}.

---




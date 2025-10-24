# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktf/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential_name: str,
  name: str,
  url: str,
  comment: str = None,
  enable_file_events: bool | IResolvable = None,
  encryption_details: ExternalLocationEncryptionDetails = None,
  fallback: bool | IResolvable = None,
  file_event_queue: ExternalLocationFileEventQueue = None,
  force_destroy: bool | IResolvable = None,
  force_update: bool | IResolvable = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: bool | IResolvable = None,
  skip_validation: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.enableFileEvents">enable_file_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fallback">fallback</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#fallback ExternalLocation#fallback}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fileEventQueue">file_event_queue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceUpdate">force_update</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.readOnly">read_only</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `enable_file_events`<sup>Optional</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.enableFileEvents"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}.

---

##### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.encryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fallback"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#fallback ExternalLocation#fallback}.

---

##### `file_event_queue`<sup>Optional</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.fileEventQueue"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forceUpdate"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.readOnly"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails">put_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue">put_file_event_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents">reset_enable_file_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails">reset_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFallback">reset_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue">reset_file_event_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">reset_skip_validation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_details` <a name="put_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails"></a>

```python
def put_encryption_details(
  sse_encryption_details: ExternalLocationEncryptionDetailsSseEncryptionDetails = None
) -> None
```

###### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails.parameter.sseEncryptionDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}

---

##### `put_file_event_queue` <a name="put_file_event_queue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue"></a>

```python
def put_file_event_queue(
  managed_aqs: ExternalLocationFileEventQueueManagedAqs = None,
  managed_pubsub: ExternalLocationFileEventQueueManagedPubsub = None,
  managed_sqs: ExternalLocationFileEventQueueManagedSqs = None,
  provided_aqs: ExternalLocationFileEventQueueProvidedAqs = None,
  provided_pubsub: ExternalLocationFileEventQueueProvidedPubsub = None,
  provided_sqs: ExternalLocationFileEventQueueProvidedSqs = None
) -> None
```

###### `managed_aqs`<sup>Optional</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.managedAqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}

---

###### `managed_pubsub`<sup>Optional</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.managedPubsub"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}

---

###### `managed_sqs`<sup>Optional</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.managedSqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}

---

###### `provided_aqs`<sup>Optional</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.providedAqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}

---

###### `provided_pubsub`<sup>Optional</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.providedPubsub"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}

---

###### `provided_sqs`<sup>Optional</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putFileEventQueue.parameter.providedSqs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_file_events` <a name="reset_enable_file_events" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEnableFileEvents"></a>

```python
def reset_enable_file_events() -> None
```

##### `reset_encryption_details` <a name="reset_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails"></a>

```python
def reset_encryption_details() -> None
```

##### `reset_fallback` <a name="reset_fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFallback"></a>

```python
def reset_fallback() -> None
```

##### `reset_file_event_queue` <a name="reset_file_event_queue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetFileEventQueue"></a>

```python
def reset_file_event_queue() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_skip_validation` <a name="reset_skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```python
def reset_skip_validation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExternalLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.browseOnly">browse_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue">file_event_queue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput">enable_file_events_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput">encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput">fallback_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput">file_event_queue_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput">force_update_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput">read_only_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">skip_validation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents">enable_file_events</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallback">fallback</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate">force_update</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly">read_only</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">skip_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.browseOnly"></a>

```python
browse_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `encryption_details`<sup>Required</sup> <a name="encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails"></a>

```python
encryption_details: ExternalLocationEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a>

---

##### `file_event_queue`<sup>Required</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueue"></a>

```python
file_event_queue: ExternalLocationFileEventQueueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference">ExternalLocationFileEventQueueOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `enable_file_events_input`<sup>Optional</sup> <a name="enable_file_events_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEventsInput"></a>

```python
enable_file_events_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encryption_details_input`<sup>Optional</sup> <a name="encryption_details_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput"></a>

```python
encryption_details_input: ExternalLocationEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `fallback_input`<sup>Optional</sup> <a name="fallback_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallbackInput"></a>

```python
fallback_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `file_event_queue_input`<sup>Optional</sup> <a name="file_event_queue_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fileEventQueueInput"></a>

```python
file_event_queue_input: ExternalLocationFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput"></a>

```python
force_update_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput"></a>

```python
read_only_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_validation_input`<sup>Optional</sup> <a name="skip_validation_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```python
skip_validation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `enable_file_events`<sup>Required</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.enableFileEvents"></a>

```python
enable_file_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fallback"></a>

```python
fallback: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate"></a>

```python
force_update: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `skip_validation`<sup>Required</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```python
skip_validation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  credential_name: str,
  name: str,
  url: str,
  comment: str = None,
  enable_file_events: bool | IResolvable = None,
  encryption_details: ExternalLocationEncryptionDetails = None,
  fallback: bool | IResolvable = None,
  file_event_queue: ExternalLocationFileEventQueue = None,
  force_destroy: bool | IResolvable = None,
  force_update: bool | IResolvable = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: bool | IResolvable = None,
  skip_validation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents">enable_file_events</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails">encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback">fallback</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#fallback ExternalLocation#fallback}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue">file_event_queue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate">force_update</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly">read_only</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">skip_validation</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `enable_file_events`<sup>Optional</sup> <a name="enable_file_events" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.enableFileEvents"></a>

```python
enable_file_events: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#enable_file_events ExternalLocation#enable_file_events}.

---

##### `encryption_details`<sup>Optional</sup> <a name="encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails"></a>

```python
encryption_details: ExternalLocationEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fallback"></a>

```python
fallback: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#fallback ExternalLocation#fallback}.

---

##### `file_event_queue`<sup>Optional</sup> <a name="file_event_queue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.fileEventQueue"></a>

```python
file_event_queue: ExternalLocationFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#file_event_queue ExternalLocation#file_event_queue}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate"></a>

```python
force_update: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly"></a>

```python
read_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```python
skip_validation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

### ExternalLocationEncryptionDetails <a name="ExternalLocationEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationEncryptionDetails(
  sse_encryption_details: ExternalLocationEncryptionDetailsSseEncryptionDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `sse_encryption_details`<sup>Optional</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: ExternalLocationEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}

---

### ExternalLocationEncryptionDetailsSseEncryptionDetails <a name="ExternalLocationEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails(
  algorithm: str = None,
  aws_kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}.

---

##### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}.

---

### ExternalLocationFileEventQueue <a name="ExternalLocationFileEventQueue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueue(
  managed_aqs: ExternalLocationFileEventQueueManagedAqs = None,
  managed_pubsub: ExternalLocationFileEventQueueManagedPubsub = None,
  managed_sqs: ExternalLocationFileEventQueueManagedSqs = None,
  provided_aqs: ExternalLocationFileEventQueueProvidedAqs = None,
  provided_pubsub: ExternalLocationFileEventQueueProvidedPubsub = None,
  provided_sqs: ExternalLocationFileEventQueueProvidedSqs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs">managed_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub">managed_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs">managed_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs">provided_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub">provided_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs">provided_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `managed_aqs`<sup>Optional</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedAqs"></a>

```python
managed_aqs: ExternalLocationFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_aqs ExternalLocation#managed_aqs}

---

##### `managed_pubsub`<sup>Optional</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedPubsub"></a>

```python
managed_pubsub: ExternalLocationFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_pubsub ExternalLocation#managed_pubsub}

---

##### `managed_sqs`<sup>Optional</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.managedSqs"></a>

```python
managed_sqs: ExternalLocationFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#managed_sqs ExternalLocation#managed_sqs}

---

##### `provided_aqs`<sup>Optional</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedAqs"></a>

```python
provided_aqs: ExternalLocationFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_aqs ExternalLocation#provided_aqs}

---

##### `provided_pubsub`<sup>Optional</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedPubsub"></a>

```python
provided_pubsub: ExternalLocationFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_pubsub ExternalLocation#provided_pubsub}

---

##### `provided_sqs`<sup>Optional</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue.property.providedSqs"></a>

```python
provided_sqs: ExternalLocationFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#provided_sqs ExternalLocation#provided_sqs}

---

### ExternalLocationFileEventQueueManagedAqs <a name="ExternalLocationFileEventQueueManagedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedAqs(
  resource_group: str,
  subscription_id: str,
  queue_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueManagedPubsub <a name="ExternalLocationFileEventQueueManagedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedPubsub(
  subscription_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueManagedSqs <a name="ExternalLocationFileEventQueueManagedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedSqs(
  queue_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

### ExternalLocationFileEventQueueProvidedAqs <a name="ExternalLocationFileEventQueueProvidedAqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedAqs(
  queue_url: str,
  resource_group: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}. |

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

### ExternalLocationFileEventQueueProvidedPubsub <a name="ExternalLocationFileEventQueueProvidedPubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedPubsub(
  subscription_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}. |

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

### ExternalLocationFileEventQueueProvidedSqs <a name="ExternalLocationFileEventQueueProvidedSqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedSqs(
  queue_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}. |

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalLocationEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails">put_sse_encryption_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails">reset_sse_encryption_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sse_encryption_details` <a name="put_sse_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```python
def put_sse_encryption_details(
  algorithm: str = None,
  aws_kms_key_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}.

---

###### `aws_kms_key_arn`<sup>Optional</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.awsKmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}.

---

##### `reset_sse_encryption_details` <a name="reset_sse_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```python
def reset_sse_encryption_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails">sse_encryption_details</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">sse_encryption_details_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_encryption_details`<sup>Required</sup> <a name="sse_encryption_details" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```python
sse_encryption_details: ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `sse_encryption_details_input`<sup>Optional</sup> <a name="sse_encryption_details_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```python
sse_encryption_details_input: ExternalLocationEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---


### ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">reset_aws_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_aws_kms_key_arn` <a name="reset_aws_kms_key_arn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```python
def reset_aws_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">aws_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">aws_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `aws_kms_key_arn_input`<sup>Optional</sup> <a name="aws_kms_key_arn_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```python
aws_kms_key_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `aws_kms_key_arn`<sup>Required</sup> <a name="aws_kms_key_arn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```python
aws_kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationEncryptionDetailsSseEncryptionDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---


### ExternalLocationFileEventQueueManagedAqsOutputReference <a name="ExternalLocationFileEventQueueManagedAqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---


### ExternalLocationFileEventQueueManagedPubsubOutputReference <a name="ExternalLocationFileEventQueueManagedPubsubOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">reset_subscription_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subscription_name` <a name="reset_subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```python
def reset_subscription_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---


### ExternalLocationFileEventQueueManagedSqsOutputReference <a name="ExternalLocationFileEventQueueManagedSqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---


### ExternalLocationFileEventQueueOutputReference <a name="ExternalLocationFileEventQueueOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs">put_managed_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub">put_managed_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs">put_managed_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs">put_provided_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub">put_provided_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs">put_provided_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs">reset_managed_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub">reset_managed_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs">reset_managed_sqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs">reset_provided_aqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub">reset_provided_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs">reset_provided_sqs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_managed_aqs` <a name="put_managed_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs"></a>

```python
def put_managed_aqs(
  resource_group: str,
  subscription_id: str,
  queue_url: str = None
) -> None
```

###### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

###### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedAqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `put_managed_pubsub` <a name="put_managed_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub"></a>

```python
def put_managed_pubsub(
  subscription_name: str = None
) -> None
```

###### `subscription_name`<sup>Optional</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedPubsub.parameter.subscriptionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

##### `put_managed_sqs` <a name="put_managed_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs"></a>

```python
def put_managed_sqs(
  queue_url: str = None
) -> None
```

###### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putManagedSqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `put_provided_aqs` <a name="put_provided_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs"></a>

```python
def put_provided_aqs(
  queue_url: str,
  resource_group: str = None,
  subscription_id: str = None
) -> None
```

###### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#resource_group ExternalLocation#resource_group}.

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedAqs.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_id ExternalLocation#subscription_id}.

---

##### `put_provided_pubsub` <a name="put_provided_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub"></a>

```python
def put_provided_pubsub(
  subscription_name: str
) -> None
```

###### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedPubsub.parameter.subscriptionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#subscription_name ExternalLocation#subscription_name}.

---

##### `put_provided_sqs` <a name="put_provided_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs"></a>

```python
def put_provided_sqs(
  queue_url: str
) -> None
```

###### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.putProvidedSqs.parameter.queueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/external_location#queue_url ExternalLocation#queue_url}.

---

##### `reset_managed_aqs` <a name="reset_managed_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedAqs"></a>

```python
def reset_managed_aqs() -> None
```

##### `reset_managed_pubsub` <a name="reset_managed_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedPubsub"></a>

```python
def reset_managed_pubsub() -> None
```

##### `reset_managed_sqs` <a name="reset_managed_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetManagedSqs"></a>

```python
def reset_managed_sqs() -> None
```

##### `reset_provided_aqs` <a name="reset_provided_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedAqs"></a>

```python
def reset_provided_aqs() -> None
```

##### `reset_provided_pubsub` <a name="reset_provided_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedPubsub"></a>

```python
def reset_provided_pubsub() -> None
```

##### `reset_provided_sqs` <a name="reset_provided_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.resetProvidedSqs"></a>

```python
def reset_provided_sqs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs">managed_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub">managed_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs">managed_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs">provided_aqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub">provided_pubsub</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs">provided_sqs</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput">managed_aqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput">managed_pubsub_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput">managed_sqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput">provided_aqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput">provided_pubsub_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput">provided_sqs_input</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_aqs`<sup>Required</sup> <a name="managed_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqs"></a>

```python
managed_aqs: ExternalLocationFileEventQueueManagedAqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqsOutputReference">ExternalLocationFileEventQueueManagedAqsOutputReference</a>

---

##### `managed_pubsub`<sup>Required</sup> <a name="managed_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsub"></a>

```python
managed_pubsub: ExternalLocationFileEventQueueManagedPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsubOutputReference">ExternalLocationFileEventQueueManagedPubsubOutputReference</a>

---

##### `managed_sqs`<sup>Required</sup> <a name="managed_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqs"></a>

```python
managed_sqs: ExternalLocationFileEventQueueManagedSqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqsOutputReference">ExternalLocationFileEventQueueManagedSqsOutputReference</a>

---

##### `provided_aqs`<sup>Required</sup> <a name="provided_aqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqs"></a>

```python
provided_aqs: ExternalLocationFileEventQueueProvidedAqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference">ExternalLocationFileEventQueueProvidedAqsOutputReference</a>

---

##### `provided_pubsub`<sup>Required</sup> <a name="provided_pubsub" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsub"></a>

```python
provided_pubsub: ExternalLocationFileEventQueueProvidedPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference">ExternalLocationFileEventQueueProvidedPubsubOutputReference</a>

---

##### `provided_sqs`<sup>Required</sup> <a name="provided_sqs" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqs"></a>

```python
provided_sqs: ExternalLocationFileEventQueueProvidedSqsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference">ExternalLocationFileEventQueueProvidedSqsOutputReference</a>

---

##### `managed_aqs_input`<sup>Optional</sup> <a name="managed_aqs_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedAqsInput"></a>

```python
managed_aqs_input: ExternalLocationFileEventQueueManagedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedAqs">ExternalLocationFileEventQueueManagedAqs</a>

---

##### `managed_pubsub_input`<sup>Optional</sup> <a name="managed_pubsub_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedPubsubInput"></a>

```python
managed_pubsub_input: ExternalLocationFileEventQueueManagedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedPubsub">ExternalLocationFileEventQueueManagedPubsub</a>

---

##### `managed_sqs_input`<sup>Optional</sup> <a name="managed_sqs_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.managedSqsInput"></a>

```python
managed_sqs_input: ExternalLocationFileEventQueueManagedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueManagedSqs">ExternalLocationFileEventQueueManagedSqs</a>

---

##### `provided_aqs_input`<sup>Optional</sup> <a name="provided_aqs_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedAqsInput"></a>

```python
provided_aqs_input: ExternalLocationFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---

##### `provided_pubsub_input`<sup>Optional</sup> <a name="provided_pubsub_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedPubsubInput"></a>

```python
provided_pubsub_input: ExternalLocationFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---

##### `provided_sqs_input`<sup>Optional</sup> <a name="provided_sqs_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.providedSqsInput"></a>

```python
provided_sqs_input: ExternalLocationFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueue
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueue">ExternalLocationFileEventQueue</a>

---


### ExternalLocationFileEventQueueProvidedAqsOutputReference <a name="ExternalLocationFileEventQueueProvidedAqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueProvidedAqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedAqs">ExternalLocationFileEventQueueProvidedAqs</a>

---


### ExternalLocationFileEventQueueProvidedPubsubOutputReference <a name="ExternalLocationFileEventQueueProvidedPubsubOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueProvidedPubsub
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedPubsub">ExternalLocationFileEventQueueProvidedPubsub</a>

---


### ExternalLocationFileEventQueueProvidedSqsOutputReference <a name="ExternalLocationFileEventQueueProvidedSqsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId">managed_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `managed_resource_id`<sup>Required</sup> <a name="managed_resource_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```python
managed_resource_id: str
```

- *Type:* str

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalLocationFileEventQueueProvidedSqs
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationFileEventQueueProvidedSqs">ExternalLocationFileEventQueueProvidedSqs</a>

---




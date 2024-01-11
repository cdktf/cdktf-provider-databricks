# `pipeline` Submodule <a name="`pipeline` Submodule" id="@cdktf/provider-databricks.pipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipeline <a name="Pipeline" id="@cdktf/provider-databricks.pipeline.Pipeline"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline databricks_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.Pipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_duplicate_names: typing.Union[bool, IResolvable] = None,
  catalog: str = None,
  channel: str = None,
  cluster: typing.Union[IResolvable, typing.List[PipelineCluster]] = None,
  configuration: typing.Mapping[str] = None,
  continuous: typing.Union[bool, IResolvable] = None,
  development: typing.Union[bool, IResolvable] = None,
  edition: str = None,
  filters: PipelineFilters = None,
  id: str = None,
  library: typing.Union[IResolvable, typing.List[PipelineLibrary]] = None,
  name: str = None,
  notification: typing.Union[IResolvable, typing.List[PipelineNotification]] = None,
  photon: typing.Union[bool, IResolvable] = None,
  serverless: typing.Union[bool, IResolvable] = None,
  storage: str = None,
  target: str = None,
  timeouts: PipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.allowDuplicateNames">allow_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.cluster">cluster</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]</code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.continuous">continuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.development">development</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.library">library</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.photon">photon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.serverless">serverless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.storage">storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_duplicate_names`<sup>Optional</sup> <a name="allow_duplicate_names" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.allowDuplicateNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.catalog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.channel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.cluster"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.configuration"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.continuous"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `development`<sup>Optional</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.development"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.edition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.library"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#library Pipeline#library}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.notification"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.photon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `serverless`<sup>Optional</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.serverless"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.storage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putCluster">put_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLibrary">put_library</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames">reset_allow_duplicate_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment">reset_development</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary">reset_library</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton">reset_photon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetServerless">reset_serverless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.Pipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.pipeline.Pipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cluster` <a name="put_cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster"></a>

```python
def put_cluster(
  value: typing.Union[IResolvable, typing.List[PipelineCluster]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters"></a>

```python
def put_filters(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.exclude"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.include"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#include Pipeline#include}.

---

##### `put_library` <a name="put_library" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary"></a>

```python
def put_library(
  value: typing.Union[IResolvable, typing.List[PipelineLibrary]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]

---

##### `put_notification` <a name="put_notification" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification"></a>

```python
def put_notification(
  value: typing.Union[IResolvable, typing.List[PipelineNotification]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#default Pipeline#default}.

---

##### `reset_allow_duplicate_names` <a name="reset_allow_duplicate_names" id="@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames"></a>

```python
def reset_allow_duplicate_names() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-databricks.pipeline.Pipeline.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_development` <a name="reset_development" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment"></a>

```python
def reset_development() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-databricks.pipeline.Pipeline.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.pipeline.Pipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_library` <a name="reset_library" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary"></a>

```python
def reset_library() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.pipeline.Pipeline.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-databricks.pipeline.Pipeline.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_photon` <a name="reset_photon" id="@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton"></a>

```python
def reset_photon() -> None
```

##### `reset_serverless` <a name="reset_serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.resetServerless"></a>

```python
def reset_serverless() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-databricks.pipeline.Pipeline.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.Pipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.Pipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.Pipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.Pipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Pipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.library">library</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput">allow_duplicate_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput">cluster_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput">continuous_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput">development_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput">library_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput">photon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput">serverless_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput">storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames">allow_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuous">continuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.development">development</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photon">photon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverless">serverless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storage">storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.pipeline.Pipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.Pipeline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.Pipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.pipeline.Pipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cluster"></a>

```python
cluster: PipelineClusterList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filters"></a>

```python
filters: PipelineFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a>

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.Pipeline.property.library"></a>

```python
library: PipelineLibraryList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notification"></a>

```python
notification: PipelineNotificationList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts"></a>

```python
timeouts: PipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.pipeline.Pipeline.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `allow_duplicate_names_input`<sup>Optional</sup> <a name="allow_duplicate_names_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput"></a>

```python
allow_duplicate_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput"></a>

```python
cluster_input: typing.Union[IResolvable, typing.List[PipelineCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput"></a>

```python
continuous_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `development_input`<sup>Optional</sup> <a name="development_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput"></a>

```python
development_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput"></a>

```python
filters_input: PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `library_input`<sup>Optional</sup> <a name="library_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput"></a>

```python
library_input: typing.Union[IResolvable, typing.List[PipelineLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, typing.List[PipelineNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]

---

##### `photon_input`<sup>Optional</sup> <a name="photon_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput"></a>

```python
photon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serverless_input`<sup>Optional</sup> <a name="serverless_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput"></a>

```python
serverless_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput"></a>

```python
storage_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>]

---

##### `allow_duplicate_names`<sup>Required</sup> <a name="allow_duplicate_names" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames"></a>

```python
allow_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuous"></a>

```python
continuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `development`<sup>Required</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.Pipeline.property.development"></a>

```python
development: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.Pipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `photon`<sup>Required</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photon"></a>

```python
photon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serverless`<sup>Required</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverless"></a>

```python
serverless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storage"></a>

```python
storage: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.Pipeline.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineCluster <a name="PipelineCluster" id="@cdktf/provider-databricks.pipeline.PipelineCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineCluster(
  apply_policy_default_values: typing.Union[bool, IResolvable] = None,
  autoscale: PipelineClusterAutoscale = None,
  aws_attributes: PipelineClusterAwsAttributes = None,
  azure_attributes: PipelineClusterAzureAttributes = None,
  cluster_log_conf: PipelineClusterClusterLogConf = None,
  custom_tags: typing.Mapping[str] = None,
  driver_instance_pool_id: str = None,
  driver_node_type_id: str = None,
  enable_local_disk_encryption: typing.Union[bool, IResolvable] = None,
  gcp_attributes: PipelineClusterGcpAttributes = None,
  init_scripts: typing.Union[IResolvable, typing.List[PipelineClusterInitScripts]] = None,
  instance_pool_id: str = None,
  label: str = None,
  node_type_id: str = None,
  num_workers: typing.Union[int, float] = None,
  policy_id: str = None,
  spark_conf: typing.Mapping[str] = None,
  spark_env_vars: typing.Mapping[str] = None,
  ssh_public_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues">apply_policy_default_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts">init_scripts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#label Pipeline#label}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#num_workers Pipeline#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#policy_id Pipeline#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}. |

---

##### `apply_policy_default_values`<sup>Optional</sup> <a name="apply_policy_default_values" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues"></a>

```python
apply_policy_default_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale"></a>

```python
autoscale: PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#autoscale Pipeline#autoscale}

---

##### `aws_attributes`<sup>Optional</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes"></a>

```python
aws_attributes: PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}

---

##### `azure_attributes`<sup>Optional</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes"></a>

```python
azure_attributes: PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}

---

##### `cluster_log_conf`<sup>Optional</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf"></a>

```python
cluster_log_conf: PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}.

---

##### `driver_instance_pool_id`<sup>Optional</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}.

---

##### `driver_node_type_id`<sup>Optional</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}.

---

##### `enable_local_disk_encryption`<sup>Optional</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}.

---

##### `gcp_attributes`<sup>Optional</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes"></a>

```python
gcp_attributes: PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}

---

##### `init_scripts`<sup>Optional</sup> <a name="init_scripts" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts"></a>

```python
init_scripts: typing.Union[IResolvable, typing.List[PipelineClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#init_scripts Pipeline#init_scripts}

---

##### `instance_pool_id`<sup>Optional</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#label Pipeline#label}.

---

##### `node_type_id`<sup>Optional</sup> <a name="node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}.

---

##### `num_workers`<sup>Optional</sup> <a name="num_workers" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#num_workers Pipeline#num_workers}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#policy_id Pipeline#policy_id}.

---

##### `spark_conf`<sup>Optional</sup> <a name="spark_conf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}.

---

##### `spark_env_vars`<sup>Optional</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}.

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}.

---

### PipelineClusterAutoscale <a name="PipelineClusterAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAutoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#max_workers Pipeline#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#min_workers Pipeline#min_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#mode Pipeline#mode}. |

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

##### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#mode Pipeline#mode}.

---

### PipelineClusterAwsAttributes <a name="PipelineClusterAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAwsAttributes(
  availability: str = None,
  ebs_volume_count: typing.Union[int, float] = None,
  ebs_volume_size: typing.Union[int, float] = None,
  ebs_volume_type: str = None,
  first_on_demand: typing.Union[int, float] = None,
  instance_profile_arn: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

##### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

##### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

##### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterAzureAttributes <a name="PipelineClusterAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAzureAttributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

### PipelineClusterClusterLogConf <a name="PipelineClusterClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConf(
  dbfs: PipelineClusterClusterLogConfDbfs = None,
  s3: PipelineClusterClusterLogConfS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs"></a>

```python
dbfs: PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3"></a>

```python
s3: PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#s3 Pipeline#s3}

---

### PipelineClusterClusterLogConfDbfs <a name="PipelineClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConfDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterClusterLogConfS3 <a name="PipelineClusterClusterLogConfS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConfS3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterGcpAttributes <a name="PipelineClusterGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterGcpAttributes(
  availability: str = None,
  google_service_account: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability">availability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability"></a>

```python
availability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

##### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterInitScripts <a name="PipelineClusterInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScripts(
  abfss: PipelineClusterInitScriptsAbfss = None,
  dbfs: PipelineClusterInitScriptsDbfs = None,
  file: PipelineClusterInitScriptsFile = None,
  gcs: PipelineClusterInitScriptsGcs = None,
  s3: PipelineClusterInitScriptsS3 = None,
  volumes: PipelineClusterInitScriptsVolumes = None,
  workspace: PipelineClusterInitScriptsWorkspace = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `abfss`<sup>Optional</sup> <a name="abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss"></a>

```python
abfss: PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#abfss Pipeline#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs"></a>

```python
dbfs: PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file"></a>

```python
file: PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#file Pipeline#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs"></a>

```python
gcs: PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#gcs Pipeline#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3"></a>

```python
s3: PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes"></a>

```python
volumes: PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#volumes Pipeline#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace"></a>

```python
workspace: PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#workspace Pipeline#workspace}

---

### PipelineClusterInitScriptsAbfss <a name="PipelineClusterInitScriptsAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsAbfss(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsDbfs <a name="PipelineClusterInitScriptsDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsDbfs(
  destination: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsFile <a name="PipelineClusterInitScriptsFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsFile(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsGcs <a name="PipelineClusterInitScriptsGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsGcs(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsS3 <a name="PipelineClusterInitScriptsS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsS3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl">canned_acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterInitScriptsVolumes <a name="PipelineClusterInitScriptsVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsVolumes(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsWorkspace <a name="PipelineClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsWorkspace(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineConfig <a name="PipelineConfig" id="@cdktf/provider-databricks.pipeline.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allow_duplicate_names: typing.Union[bool, IResolvable] = None,
  catalog: str = None,
  channel: str = None,
  cluster: typing.Union[IResolvable, typing.List[PipelineCluster]] = None,
  configuration: typing.Mapping[str] = None,
  continuous: typing.Union[bool, IResolvable] = None,
  development: typing.Union[bool, IResolvable] = None,
  edition: str = None,
  filters: PipelineFilters = None,
  id: str = None,
  library: typing.Union[IResolvable, typing.List[PipelineLibrary]] = None,
  name: str = None,
  notification: typing.Union[IResolvable, typing.List[PipelineNotification]] = None,
  photon: typing.Union[bool, IResolvable] = None,
  serverless: typing.Union[bool, IResolvable] = None,
  storage: str = None,
  target: str = None,
  timeouts: PipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames">allow_duplicate_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster">cluster</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]</code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous">continuous</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.development">development</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.library">library</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification">notification</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]</code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon">photon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless">serverless</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage">storage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow_duplicate_names`<sup>Optional</sup> <a name="allow_duplicate_names" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames"></a>

```python
allow_duplicate_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster"></a>

```python
cluster: typing.Union[IResolvable, typing.List[PipelineCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous"></a>

```python
continuous: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `development`<sup>Optional</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.development"></a>

```python
development: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters"></a>

```python
filters: PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.library"></a>

```python
library: typing.Union[IResolvable, typing.List[PipelineLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#library Pipeline#library}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification"></a>

```python
notification: typing.Union[IResolvable, typing.List[PipelineNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon"></a>

```python
photon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `serverless`<sup>Optional</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless"></a>

```python
serverless: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage"></a>

```python
storage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts"></a>

```python
timeouts: PipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

### PipelineFilters <a name="PipelineFilters" id="@cdktf/provider-databricks.pipeline.PipelineFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineFilters(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclude Pipeline#exclude}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.include">include</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#include Pipeline#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#include Pipeline#include}.

---

### PipelineLibrary <a name="PipelineLibrary" id="@cdktf/provider-databricks.pipeline.PipelineLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibrary(
  file: PipelineLibraryFile = None,
  jar: str = None,
  maven: PipelineLibraryMaven = None,
  notebook: PipelineLibraryNotebook = None,
  whl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#jar Pipeline#jar}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl">whl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#whl Pipeline#whl}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file"></a>

```python
file: PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#file Pipeline#file}

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar"></a>

```python
jar: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#jar Pipeline#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven"></a>

```python
maven: PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#maven Pipeline#maven}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook"></a>

```python
notebook: PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#notebook Pipeline#notebook}

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl"></a>

```python
whl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#whl Pipeline#whl}.

---

### PipelineLibraryFile <a name="PipelineLibraryFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryFile(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineLibraryMaven <a name="PipelineLibraryMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryMaven(
  coordinates: str,
  exclusions: typing.List[str] = None,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates">coordinates</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#coordinates Pipeline#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclusions Pipeline#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#repo Pipeline#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#repo Pipeline#repo}.

---

### PipelineLibraryNotebook <a name="PipelineLibraryNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryNotebook(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineNotification <a name="PipelineNotification" id="@cdktf/provider-databricks.pipeline.PipelineNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineNotification(
  alerts: typing.List[str],
  email_recipients: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts">alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#alerts Pipeline#alerts}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients">email_recipients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}. |

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts"></a>

```python
alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#alerts Pipeline#alerts}.

---

##### `email_recipients`<sup>Required</sup> <a name="email_recipients" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients"></a>

```python
email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}.

---

### PipelineTimeouts <a name="PipelineTimeouts" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#default Pipeline#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#default Pipeline#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineClusterAutoscaleOutputReference <a name="PipelineClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAutoscaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers">reset_min_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_min_workers` <a name="reset_min_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers"></a>

```python
def reset_min_workers() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput">min_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers_input`<sup>Optional</sup> <a name="min_workers_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```python
min_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers`<sup>Required</sup> <a name="min_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---


### PipelineClusterAwsAttributesOutputReference <a name="PipelineClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAwsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount">reset_ebs_volume_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize">reset_ebs_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType">reset_ebs_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent">reset_spot_bid_price_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_ebs_volume_count` <a name="reset_ebs_volume_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```python
def reset_ebs_volume_count() -> None
```

##### `reset_ebs_volume_size` <a name="reset_ebs_volume_size" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```python
def reset_ebs_volume_size() -> None
```

##### `reset_ebs_volume_type` <a name="reset_ebs_volume_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```python
def reset_ebs_volume_type() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_spot_bid_price_percent` <a name="reset_spot_bid_price_percent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```python
def reset_spot_bid_price_percent() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">ebs_volume_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebs_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebs_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">spot_bid_price_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount">ebs_volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize">ebs_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent">spot_bid_price_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `ebs_volume_count_input`<sup>Optional</sup> <a name="ebs_volume_count_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```python
ebs_volume_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size_input`<sup>Optional</sup> <a name="ebs_volume_size_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```python
ebs_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type_input`<sup>Optional</sup> <a name="ebs_volume_type_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```python
ebs_volume_type_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `spot_bid_price_percent_input`<sup>Optional</sup> <a name="spot_bid_price_percent_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```python
spot_bid_price_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `ebs_volume_count`<sup>Required</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```python
ebs_volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_size`<sup>Required</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```python
ebs_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `spot_bid_price_percent`<sup>Required</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```python
spot_bid_price_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---


### PipelineClusterAzureAttributesOutputReference <a name="PipelineClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterAzureAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand">reset_first_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">reset_spot_bid_max_price</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_first_on_demand` <a name="reset_first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```python
def reset_first_on_demand() -> None
```

##### `reset_spot_bid_max_price` <a name="reset_spot_bid_max_price" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```python
def reset_spot_bid_max_price() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput">first_on_demand_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">spot_bid_max_price_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand">first_on_demand</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice">spot_bid_max_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `first_on_demand_input`<sup>Optional</sup> <a name="first_on_demand_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```python
first_on_demand_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price_input`<sup>Optional</sup> <a name="spot_bid_max_price_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```python
spot_bid_max_price_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `first_on_demand`<sup>Required</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```python
first_on_demand: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spot_bid_max_price`<sup>Required</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```python
spot_bid_max_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---


### PipelineClusterClusterLogConfDbfsOutputReference <a name="PipelineClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConfDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---


### PipelineClusterClusterLogConfOutputReference <a name="PipelineClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3"></a>

```python
def put_s3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}.

---

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs"></a>

```python
dbfs: PipelineClusterClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3"></a>

```python
s3: PipelineClusterClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```python
dbfs_input: PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input"></a>

```python
s3_input: PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---


### PipelineClusterClusterLogConfS3OutputReference <a name="PipelineClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterClusterLogConfS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---


### PipelineClusterGcpAttributesOutputReference <a name="PipelineClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterGcpAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability">reset_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount">reset_google_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount">reset_local_ssd_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability` <a name="reset_availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability"></a>

```python
def reset_availability() -> None
```

##### `reset_google_service_account` <a name="reset_google_service_account" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```python
def reset_google_service_account() -> None
```

##### `reset_local_ssd_count` <a name="reset_local_ssd_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```python
def reset_local_ssd_count() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput">availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput">google_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput">local_ssd_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount">local_ssd_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_input`<sup>Optional</sup> <a name="availability_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```python
availability_input: str
```

- *Type:* str

---

##### `google_service_account_input`<sup>Optional</sup> <a name="google_service_account_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```python
google_service_account_input: str
```

- *Type:* str

---

##### `local_ssd_count_input`<sup>Optional</sup> <a name="local_ssd_count_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```python
local_ssd_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `google_service_account`<sup>Required</sup> <a name="google_service_account" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

---

##### `local_ssd_count`<sup>Required</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```python
local_ssd_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---


### PipelineClusterInitScriptsAbfssOutputReference <a name="PipelineClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsAbfssOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---


### PipelineClusterInitScriptsDbfsOutputReference <a name="PipelineClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsDbfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---


### PipelineClusterInitScriptsFileOutputReference <a name="PipelineClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---


### PipelineClusterInitScriptsGcsOutputReference <a name="PipelineClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsGcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---


### PipelineClusterInitScriptsList <a name="PipelineClusterInitScriptsList" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PipelineClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]

---


### PipelineClusterInitScriptsOutputReference <a name="PipelineClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss">put_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs">put_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs">put_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace">put_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss">reset_abfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs">reset_dbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs">reset_gcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abfss` <a name="put_abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss"></a>

```python
def put_abfss(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_dbfs` <a name="put_dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs"></a>

```python
def put_dbfs(
  destination: str
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_file` <a name="put_file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile"></a>

```python
def put_file(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_gcs` <a name="put_gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs"></a>

```python
def put_gcs(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3"></a>

```python
def put_s3(
  destination: str,
  canned_acl: str = None,
  enable_encryption: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  endpoint: str = None,
  kms_key: str = None,
  region: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

###### `canned_acl`<sup>Optional</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.cannedAcl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

###### `enable_encryption`<sup>Optional</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.enableEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.encryptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

###### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#region Pipeline#region}.

---

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes"></a>

```python
def put_volumes(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `put_workspace` <a name="put_workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace"></a>

```python
def put_workspace(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `reset_abfss` <a name="reset_abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss"></a>

```python
def reset_abfss() -> None
```

##### `reset_dbfs` <a name="reset_dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs"></a>

```python
def reset_dbfs() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_gcs` <a name="reset_gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs"></a>

```python
def reset_gcs() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput">abfss_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput">dbfs_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput">gcs_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput">volumes_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput">workspace_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss"></a>

```python
abfss: PipelineClusterInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs"></a>

```python
dbfs: PipelineClusterInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file"></a>

```python
file: PipelineClusterInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs"></a>

```python
gcs: PipelineClusterInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3"></a>

```python
s3: PipelineClusterInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes"></a>

```python
volumes: PipelineClusterInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace"></a>

```python
workspace: PipelineClusterInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a>

---

##### `abfss_input`<sup>Optional</sup> <a name="abfss_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput"></a>

```python
abfss_input: PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `dbfs_input`<sup>Optional</sup> <a name="dbfs_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput"></a>

```python
dbfs_input: PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput"></a>

```python
file_input: PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `gcs_input`<sup>Optional</sup> <a name="gcs_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput"></a>

```python
gcs_input: PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input"></a>

```python
s3_input: PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput"></a>

```python
volumes_input: PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput"></a>

```python
workspace_input: PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipelineClusterInitScripts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]

---


### PipelineClusterInitScriptsS3OutputReference <a name="PipelineClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl">reset_canned_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption">reset_enable_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canned_acl` <a name="reset_canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```python
def reset_canned_acl() -> None
```

##### `reset_enable_encryption` <a name="reset_enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```python
def reset_enable_encryption() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput">canned_acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput">enable_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl">canned_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption">enable_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canned_acl_input`<sup>Optional</sup> <a name="canned_acl_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```python
canned_acl_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `enable_encryption_input`<sup>Optional</sup> <a name="enable_encryption_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```python
enable_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `canned_acl`<sup>Required</sup> <a name="canned_acl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```python
canned_acl: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `enable_encryption`<sup>Required</sup> <a name="enable_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```python
enable_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---


### PipelineClusterInitScriptsVolumesOutputReference <a name="PipelineClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---


### PipelineClusterInitScriptsWorkspaceOutputReference <a name="PipelineClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterInitScriptsWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---


### PipelineClusterList <a name="PipelineClusterList" id="@cdktf/provider-databricks.pipeline.PipelineClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PipelineCluster]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]]

---


### PipelineClusterOutputReference <a name="PipelineClusterOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale">put_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes">put_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes">put_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf">put_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes">put_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts">put_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues">reset_apply_policy_default_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale">reset_autoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes">reset_aws_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes">reset_azure_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf">reset_cluster_log_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId">reset_driver_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId">reset_driver_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption">reset_enable_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes">reset_gcp_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts">reset_init_scripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId">reset_instance_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId">reset_node_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers">reset_num_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf">reset_spark_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars">reset_spark_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale` <a name="put_autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale"></a>

```python
def put_autoscale(
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

###### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.minWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#mode Pipeline#mode}.

---

##### `put_aws_attributes` <a name="put_aws_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes"></a>

```python
def put_aws_attributes(
  availability: str = None,
  ebs_volume_count: typing.Union[int, float] = None,
  ebs_volume_size: typing.Union[int, float] = None,
  ebs_volume_type: str = None,
  first_on_demand: typing.Union[int, float] = None,
  instance_profile_arn: str = None,
  spot_bid_price_percent: typing.Union[int, float] = None,
  zone_id: str = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

###### `ebs_volume_count`<sup>Optional</sup> <a name="ebs_volume_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.ebsVolumeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

###### `ebs_volume_size`<sup>Optional</sup> <a name="ebs_volume_size" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.ebsVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

###### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.ebsVolumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

###### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

###### `spot_bid_price_percent`<sup>Optional</sup> <a name="spot_bid_price_percent" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.spotBidPricePercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

##### `put_azure_attributes` <a name="put_azure_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes"></a>

```python
def put_azure_attributes(
  availability: str = None,
  first_on_demand: typing.Union[int, float] = None,
  spot_bid_max_price: typing.Union[int, float] = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

###### `first_on_demand`<sup>Optional</sup> <a name="first_on_demand" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.firstOnDemand"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

###### `spot_bid_max_price`<sup>Optional</sup> <a name="spot_bid_max_price" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.spotBidMaxPrice"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

##### `put_cluster_log_conf` <a name="put_cluster_log_conf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf"></a>

```python
def put_cluster_log_conf(
  dbfs: PipelineClusterClusterLogConfDbfs = None,
  s3: PipelineClusterClusterLogConfS3 = None
) -> None
```

###### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.dbfs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `put_gcp_attributes` <a name="put_gcp_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes"></a>

```python
def put_gcp_attributes(
  availability: str = None,
  google_service_account: str = None,
  local_ssd_count: typing.Union[int, float] = None,
  zone_id: str = None
) -> None
```

###### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.availability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#availability Pipeline#availability}.

---

###### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.googleServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

###### `local_ssd_count`<sup>Optional</sup> <a name="local_ssd_count" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.localSsdCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}.

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

##### `put_init_scripts` <a name="put_init_scripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts"></a>

```python
def put_init_scripts(
  value: typing.Union[IResolvable, typing.List[PipelineClusterInitScripts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]

---

##### `reset_apply_policy_default_values` <a name="reset_apply_policy_default_values" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues"></a>

```python
def reset_apply_policy_default_values() -> None
```

##### `reset_autoscale` <a name="reset_autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale"></a>

```python
def reset_autoscale() -> None
```

##### `reset_aws_attributes` <a name="reset_aws_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes"></a>

```python
def reset_aws_attributes() -> None
```

##### `reset_azure_attributes` <a name="reset_azure_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes"></a>

```python
def reset_azure_attributes() -> None
```

##### `reset_cluster_log_conf` <a name="reset_cluster_log_conf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf"></a>

```python
def reset_cluster_log_conf() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_driver_instance_pool_id` <a name="reset_driver_instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId"></a>

```python
def reset_driver_instance_pool_id() -> None
```

##### `reset_driver_node_type_id` <a name="reset_driver_node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId"></a>

```python
def reset_driver_node_type_id() -> None
```

##### `reset_enable_local_disk_encryption` <a name="reset_enable_local_disk_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption"></a>

```python
def reset_enable_local_disk_encryption() -> None
```

##### `reset_gcp_attributes` <a name="reset_gcp_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes"></a>

```python
def reset_gcp_attributes() -> None
```

##### `reset_init_scripts` <a name="reset_init_scripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts"></a>

```python
def reset_init_scripts() -> None
```

##### `reset_instance_pool_id` <a name="reset_instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId"></a>

```python
def reset_instance_pool_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_node_type_id` <a name="reset_node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId"></a>

```python
def reset_node_type_id() -> None
```

##### `reset_num_workers` <a name="reset_num_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers"></a>

```python
def reset_num_workers() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_spark_conf` <a name="reset_spark_conf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf"></a>

```python
def reset_spark_conf() -> None
```

##### `reset_spark_env_vars` <a name="reset_spark_env_vars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars"></a>

```python
def reset_spark_env_vars() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes">aws_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes">azure_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf">cluster_log_conf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes">gcp_attributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts">init_scripts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput">apply_policy_default_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput">autoscale_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput">aws_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput">azure_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput">cluster_log_conf_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput">driver_instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput">driver_node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput">enable_local_disk_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput">gcp_attributes_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput">init_scripts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput">instance_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput">num_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput">spark_conf_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput">spark_env_vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues">apply_policy_default_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId">driver_instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId">driver_node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption">enable_local_disk_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId">instance_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers">num_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf">spark_conf</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars">spark_env_vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale"></a>

```python
autoscale: PipelineClusterAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a>

---

##### `aws_attributes`<sup>Required</sup> <a name="aws_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes"></a>

```python
aws_attributes: PipelineClusterAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a>

---

##### `azure_attributes`<sup>Required</sup> <a name="azure_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes"></a>

```python
azure_attributes: PipelineClusterAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a>

---

##### `cluster_log_conf`<sup>Required</sup> <a name="cluster_log_conf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf"></a>

```python
cluster_log_conf: PipelineClusterClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a>

---

##### `gcp_attributes`<sup>Required</sup> <a name="gcp_attributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes"></a>

```python
gcp_attributes: PipelineClusterGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a>

---

##### `init_scripts`<sup>Required</sup> <a name="init_scripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts"></a>

```python
init_scripts: PipelineClusterInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a>

---

##### `apply_policy_default_values_input`<sup>Optional</sup> <a name="apply_policy_default_values_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput"></a>

```python
apply_policy_default_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_input`<sup>Optional</sup> <a name="autoscale_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput"></a>

```python
autoscale_input: PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `aws_attributes_input`<sup>Optional</sup> <a name="aws_attributes_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput"></a>

```python
aws_attributes_input: PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `azure_attributes_input`<sup>Optional</sup> <a name="azure_attributes_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput"></a>

```python
azure_attributes_input: PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `cluster_log_conf_input`<sup>Optional</sup> <a name="cluster_log_conf_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput"></a>

```python
cluster_log_conf_input: PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_instance_pool_id_input`<sup>Optional</sup> <a name="driver_instance_pool_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput"></a>

```python
driver_instance_pool_id_input: str
```

- *Type:* str

---

##### `driver_node_type_id_input`<sup>Optional</sup> <a name="driver_node_type_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput"></a>

```python
driver_node_type_id_input: str
```

- *Type:* str

---

##### `enable_local_disk_encryption_input`<sup>Optional</sup> <a name="enable_local_disk_encryption_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput"></a>

```python
enable_local_disk_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_attributes_input`<sup>Optional</sup> <a name="gcp_attributes_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput"></a>

```python
gcp_attributes_input: PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `init_scripts_input`<sup>Optional</sup> <a name="init_scripts_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput"></a>

```python
init_scripts_input: typing.Union[IResolvable, typing.List[PipelineClusterInitScripts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>]]

---

##### `instance_pool_id_input`<sup>Optional</sup> <a name="instance_pool_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput"></a>

```python
instance_pool_id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `num_workers_input`<sup>Optional</sup> <a name="num_workers_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput"></a>

```python
num_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `spark_conf_input`<sup>Optional</sup> <a name="spark_conf_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput"></a>

```python
spark_conf_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_env_vars_input`<sup>Optional</sup> <a name="spark_env_vars_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput"></a>

```python
spark_env_vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apply_policy_default_values`<sup>Required</sup> <a name="apply_policy_default_values" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues"></a>

```python
apply_policy_default_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `driver_instance_pool_id`<sup>Required</sup> <a name="driver_instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId"></a>

```python
driver_instance_pool_id: str
```

- *Type:* str

---

##### `driver_node_type_id`<sup>Required</sup> <a name="driver_node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId"></a>

```python
driver_node_type_id: str
```

- *Type:* str

---

##### `enable_local_disk_encryption`<sup>Required</sup> <a name="enable_local_disk_encryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption"></a>

```python
enable_local_disk_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_pool_id`<sup>Required</sup> <a name="instance_pool_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId"></a>

```python
instance_pool_id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `num_workers`<sup>Required</sup> <a name="num_workers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers"></a>

```python
num_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `spark_conf`<sup>Required</sup> <a name="spark_conf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf"></a>

```python
spark_conf: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_env_vars`<sup>Required</sup> <a name="spark_env_vars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars"></a>

```python
spark_env_vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipelineCluster]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>]

---


### PipelineFiltersOutputReference <a name="PipelineFiltersOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue"></a>

```python
internal_value: PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---


### PipelineLibraryFileOutputReference <a name="PipelineLibraryFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue"></a>

```python
internal_value: PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---


### PipelineLibraryList <a name="PipelineLibraryList" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PipelineLibrary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]]

---


### PipelineLibraryMavenOutputReference <a name="PipelineLibraryMavenOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryMavenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput">coordinates_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coordinates_input`<sup>Optional</sup> <a name="coordinates_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput"></a>

```python
coordinates_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue"></a>

```python
internal_value: PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---


### PipelineLibraryNotebookOutputReference <a name="PipelineLibraryNotebookOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue"></a>

```python
internal_value: PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---


### PipelineLibraryOutputReference <a name="PipelineLibraryOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineLibraryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven">put_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar">reset_jar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven">reset_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl">reset_whl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile"></a>

```python
def put_file(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}.

---

##### `put_maven` <a name="put_maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven"></a>

```python
def put_maven(
  coordinates: str,
  exclusions: typing.List[str] = None,
  repo: str = None
) -> None
```

###### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.coordinates"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

###### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.exclusions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

###### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.repo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#repo Pipeline#repo}.

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook"></a>

```python
def put_notebook(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.34.0/docs/resources/pipeline#path Pipeline#path}.

---

##### `reset_file` <a name="reset_file" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_jar` <a name="reset_jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar"></a>

```python
def reset_jar() -> None
```

##### `reset_maven` <a name="reset_maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven"></a>

```python
def reset_maven() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_whl` <a name="reset_whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl"></a>

```python
def reset_whl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput">file_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput">jar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput">maven_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput">notebook_input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput">whl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar">jar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl">whl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file"></a>

```python
file: PipelineLibraryFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven"></a>

```python
maven: PipelineLibraryMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook"></a>

```python
notebook: PipelineLibraryNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput"></a>

```python
file_input: PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `jar_input`<sup>Optional</sup> <a name="jar_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput"></a>

```python
jar_input: str
```

- *Type:* str

---

##### `maven_input`<sup>Optional</sup> <a name="maven_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput"></a>

```python
maven_input: PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput"></a>

```python
notebook_input: PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `whl_input`<sup>Optional</sup> <a name="whl_input" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput"></a>

```python
whl_input: str
```

- *Type:* str

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar"></a>

```python
jar: str
```

- *Type:* str

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl"></a>

```python
whl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipelineLibrary]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>]

---


### PipelineNotificationList <a name="PipelineNotificationList" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineNotificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PipelineNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PipelineNotification]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]]

---


### PipelineNotificationOutputReference <a name="PipelineNotificationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput">alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput">email_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts">alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients">email_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alerts_input`<sup>Optional</sup> <a name="alerts_input" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput"></a>

```python
alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_recipients_input`<sup>Optional</sup> <a name="email_recipients_input" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput"></a>

```python
email_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts"></a>

```python
alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_recipients`<sup>Required</sup> <a name="email_recipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients"></a>

```python
email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipelineNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>]

---


### PipelineTimeoutsOutputReference <a name="PipelineTimeoutsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import pipeline

pipeline.PipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PipelineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>]

---




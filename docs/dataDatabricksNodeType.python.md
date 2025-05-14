# `dataDatabricksNodeType` Submodule <a name="`dataDatabricksNodeType` Submodule" id="@cdktf/provider-databricks.dataDatabricksNodeType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNodeType <a name="DataDatabricksNodeType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type databricks_node_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str = None,
  fleet: typing.Union[bool, IResolvable] = None,
  gb_per_core: typing.Union[int, float] = None,
  graviton: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_io_cache_enabled: typing.Union[bool, IResolvable] = None,
  local_disk: typing.Union[bool, IResolvable] = None,
  local_disk_min_size: typing.Union[int, float] = None,
  min_cores: typing.Union[int, float] = None,
  min_gpus: typing.Union[int, float] = None,
  min_memory_gb: typing.Union[int, float] = None,
  photon_driver_capable: typing.Union[bool, IResolvable] = None,
  photon_worker_capable: typing.Union[bool, IResolvable] = None,
  support_port_forwarding: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.fleet">fleet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.gbPerCore">gb_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.graviton">graviton</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.isIoCacheEnabled">is_io_cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDisk">local_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDiskMinSize">local_disk_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minCores">min_cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minGpus">min_gpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minMemoryGb">min_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonDriverCapable">photon_driver_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonWorkerCapable">photon_worker_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.supportPortForwarding">support_port_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.category"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `fleet`<sup>Optional</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.fleet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `gb_per_core`<sup>Optional</sup> <a name="gb_per_core" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.gbPerCore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.graviton"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_io_cache_enabled`<sup>Optional</sup> <a name="is_io_cache_enabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.isIoCacheEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `local_disk`<sup>Optional</sup> <a name="local_disk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `local_disk_min_size`<sup>Optional</sup> <a name="local_disk_min_size" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDiskMinSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `min_cores`<sup>Optional</sup> <a name="min_cores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minCores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `min_gpus`<sup>Optional</sup> <a name="min_gpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minGpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `min_memory_gb`<sup>Optional</sup> <a name="min_memory_gb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minMemoryGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `photon_driver_capable`<sup>Optional</sup> <a name="photon_driver_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonDriverCapable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `photon_worker_capable`<sup>Optional</sup> <a name="photon_worker_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonWorkerCapable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `support_port_forwarding`<sup>Optional</sup> <a name="support_port_forwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.supportPortForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet">reset_fleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore">reset_gb_per_core</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton">reset_graviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled">reset_is_io_cache_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk">reset_local_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize">reset_local_disk_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores">reset_min_cores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus">reset_min_gpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb">reset_min_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable">reset_photon_driver_capable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable">reset_photon_worker_capable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding">reset_support_port_forwarding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_category` <a name="reset_category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_fleet` <a name="reset_fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet"></a>

```python
def reset_fleet() -> None
```

##### `reset_gb_per_core` <a name="reset_gb_per_core" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore"></a>

```python
def reset_gb_per_core() -> None
```

##### `reset_graviton` <a name="reset_graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton"></a>

```python
def reset_graviton() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_io_cache_enabled` <a name="reset_is_io_cache_enabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled"></a>

```python
def reset_is_io_cache_enabled() -> None
```

##### `reset_local_disk` <a name="reset_local_disk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk"></a>

```python
def reset_local_disk() -> None
```

##### `reset_local_disk_min_size` <a name="reset_local_disk_min_size" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize"></a>

```python
def reset_local_disk_min_size() -> None
```

##### `reset_min_cores` <a name="reset_min_cores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores"></a>

```python
def reset_min_cores() -> None
```

##### `reset_min_gpus` <a name="reset_min_gpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus"></a>

```python
def reset_min_gpus() -> None
```

##### `reset_min_memory_gb` <a name="reset_min_memory_gb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb"></a>

```python
def reset_min_memory_gb() -> None
```

##### `reset_photon_driver_capable` <a name="reset_photon_driver_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable"></a>

```python
def reset_photon_driver_capable() -> None
```

##### `reset_photon_worker_capable` <a name="reset_photon_worker_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable"></a>

```python
def reset_photon_worker_capable() -> None
```

##### `reset_support_port_forwarding` <a name="reset_support_port_forwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding"></a>

```python
def reset_support_port_forwarding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksNodeType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksNodeType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksNodeType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksNodeType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNodeType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput">fleet_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput">gb_per_core_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput">graviton_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput">is_io_cache_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput">local_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput">local_disk_min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput">min_cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput">min_gpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput">min_memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput">photon_driver_capable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput">photon_worker_capable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput">support_port_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet">fleet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore">gb_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton">graviton</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled">is_io_cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk">local_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize">local_disk_min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores">min_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus">min_gpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb">min_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable">photon_driver_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable">photon_worker_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding">support_port_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `fleet_input`<sup>Optional</sup> <a name="fleet_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput"></a>

```python
fleet_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gb_per_core_input`<sup>Optional</sup> <a name="gb_per_core_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput"></a>

```python
gb_per_core_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graviton_input`<sup>Optional</sup> <a name="graviton_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput"></a>

```python
graviton_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_io_cache_enabled_input`<sup>Optional</sup> <a name="is_io_cache_enabled_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput"></a>

```python
is_io_cache_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_disk_input`<sup>Optional</sup> <a name="local_disk_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput"></a>

```python
local_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_disk_min_size_input`<sup>Optional</sup> <a name="local_disk_min_size_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput"></a>

```python
local_disk_min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cores_input`<sup>Optional</sup> <a name="min_cores_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput"></a>

```python
min_cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpus_input`<sup>Optional</sup> <a name="min_gpus_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput"></a>

```python
min_gpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gb_input`<sup>Optional</sup> <a name="min_memory_gb_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput"></a>

```python
min_memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `photon_driver_capable_input`<sup>Optional</sup> <a name="photon_driver_capable_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput"></a>

```python
photon_driver_capable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `photon_worker_capable_input`<sup>Optional</sup> <a name="photon_worker_capable_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput"></a>

```python
photon_worker_capable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `support_port_forwarding_input`<sup>Optional</sup> <a name="support_port_forwarding_input" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput"></a>

```python
support_port_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet"></a>

```python
fleet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gb_per_core`<sup>Required</sup> <a name="gb_per_core" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore"></a>

```python
gb_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graviton`<sup>Required</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton"></a>

```python
graviton: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_io_cache_enabled`<sup>Required</sup> <a name="is_io_cache_enabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled"></a>

```python
is_io_cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_disk`<sup>Required</sup> <a name="local_disk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk"></a>

```python
local_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `local_disk_min_size`<sup>Required</sup> <a name="local_disk_min_size" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize"></a>

```python
local_disk_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cores`<sup>Required</sup> <a name="min_cores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores"></a>

```python
min_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpus`<sup>Required</sup> <a name="min_gpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus"></a>

```python
min_gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gb`<sup>Required</sup> <a name="min_memory_gb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb"></a>

```python
min_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `photon_driver_capable`<sup>Required</sup> <a name="photon_driver_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable"></a>

```python
photon_driver_capable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `photon_worker_capable`<sup>Required</sup> <a name="photon_worker_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable"></a>

```python
photon_worker_capable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `support_port_forwarding`<sup>Required</sup> <a name="support_port_forwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding"></a>

```python
support_port_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNodeTypeConfig <a name="DataDatabricksNodeTypeConfig" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_node_type

dataDatabricksNodeType.DataDatabricksNodeTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str = None,
  fleet: typing.Union[bool, IResolvable] = None,
  gb_per_core: typing.Union[int, float] = None,
  graviton: typing.Union[bool, IResolvable] = None,
  id: str = None,
  is_io_cache_enabled: typing.Union[bool, IResolvable] = None,
  local_disk: typing.Union[bool, IResolvable] = None,
  local_disk_min_size: typing.Union[int, float] = None,
  min_cores: typing.Union[int, float] = None,
  min_gpus: typing.Union[int, float] = None,
  min_memory_gb: typing.Union[int, float] = None,
  photon_driver_capable: typing.Union[bool, IResolvable] = None,
  photon_worker_capable: typing.Union[bool, IResolvable] = None,
  support_port_forwarding: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet">fleet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore">gb_per_core</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton">graviton</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled">is_io_cache_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk">local_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize">local_disk_min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores">min_cores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus">min_gpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb">min_memory_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable">photon_driver_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable">photon_worker_capable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding">support_port_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `fleet`<sup>Optional</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet"></a>

```python
fleet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `gb_per_core`<sup>Optional</sup> <a name="gb_per_core" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore"></a>

```python
gb_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton"></a>

```python
graviton: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_io_cache_enabled`<sup>Optional</sup> <a name="is_io_cache_enabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled"></a>

```python
is_io_cache_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `local_disk`<sup>Optional</sup> <a name="local_disk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk"></a>

```python
local_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `local_disk_min_size`<sup>Optional</sup> <a name="local_disk_min_size" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize"></a>

```python
local_disk_min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `min_cores`<sup>Optional</sup> <a name="min_cores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores"></a>

```python
min_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `min_gpus`<sup>Optional</sup> <a name="min_gpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus"></a>

```python
min_gpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `min_memory_gb`<sup>Optional</sup> <a name="min_memory_gb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb"></a>

```python
min_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `photon_driver_capable`<sup>Optional</sup> <a name="photon_driver_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable"></a>

```python
photon_driver_capable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `photon_worker_capable`<sup>Optional</sup> <a name="photon_worker_capable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable"></a>

```python
photon_worker_capable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `support_port_forwarding`<sup>Optional</sup> <a name="support_port_forwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding"></a>

```python
support_port_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---




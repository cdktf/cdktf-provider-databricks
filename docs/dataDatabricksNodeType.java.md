# `dataDatabricksNodeType` Submodule <a name="`dataDatabricksNodeType` Submodule" id="@cdktf/provider-databricks.dataDatabricksNodeType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNodeType <a name="DataDatabricksNodeType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type databricks_node_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeType;

DataDatabricksNodeType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .category(java.lang.String)
//  .fleet(java.lang.Boolean)
//  .fleet(IResolvable)
//  .gbPerCore(java.lang.Number)
//  .graviton(java.lang.Boolean)
//  .graviton(IResolvable)
//  .id(java.lang.String)
//  .isIoCacheEnabled(java.lang.Boolean)
//  .isIoCacheEnabled(IResolvable)
//  .localDisk(java.lang.Boolean)
//  .localDisk(IResolvable)
//  .localDiskMinSize(java.lang.Number)
//  .minCores(java.lang.Number)
//  .minGpus(java.lang.Number)
//  .minMemoryGb(java.lang.Number)
//  .photonDriverCapable(java.lang.Boolean)
//  .photonDriverCapable(IResolvable)
//  .photonWorkerCapable(java.lang.Boolean)
//  .photonWorkerCapable(IResolvable)
//  .supportPortForwarding(java.lang.Boolean)
//  .supportPortForwarding(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.fleet">fleet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.gbPerCore">gbPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.isIoCacheEnabled">isIoCacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDisk">localDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDiskMinSize">localDiskMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minCores">minCores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minGpus">minGpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minMemoryGb">minMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonDriverCapable">photonDriverCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonWorkerCapable">photonWorkerCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.supportPortForwarding">supportPortForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.category"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `fleet`<sup>Optional</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.fleet"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `gbPerCore`<sup>Optional</sup> <a name="gbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.gbPerCore"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.graviton"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIoCacheEnabled`<sup>Optional</sup> <a name="isIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.isIoCacheEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `localDisk`<sup>Optional</sup> <a name="localDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDisk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `localDiskMinSize`<sup>Optional</sup> <a name="localDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.localDiskMinSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `minCores`<sup>Optional</sup> <a name="minCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minCores"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `minGpus`<sup>Optional</sup> <a name="minGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minGpus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `minMemoryGb`<sup>Optional</sup> <a name="minMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.minMemoryGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `photonDriverCapable`<sup>Optional</sup> <a name="photonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonDriverCapable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `photonWorkerCapable`<sup>Optional</sup> <a name="photonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.photonWorkerCapable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `supportPortForwarding`<sup>Optional</sup> <a name="supportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.supportPortForwarding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet">resetFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore">resetGbPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton">resetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled">resetIsIoCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk">resetLocalDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize">resetLocalDiskMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores">resetMinCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus">resetMinGpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb">resetMinMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable">resetPhotonDriverCapable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable">resetPhotonWorkerCapable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding">resetSupportPortForwarding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetFleet` <a name="resetFleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet"></a>

```java
public void resetFleet()
```

##### `resetGbPerCore` <a name="resetGbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore"></a>

```java
public void resetGbPerCore()
```

##### `resetGraviton` <a name="resetGraviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton"></a>

```java
public void resetGraviton()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId"></a>

```java
public void resetId()
```

##### `resetIsIoCacheEnabled` <a name="resetIsIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled"></a>

```java
public void resetIsIoCacheEnabled()
```

##### `resetLocalDisk` <a name="resetLocalDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk"></a>

```java
public void resetLocalDisk()
```

##### `resetLocalDiskMinSize` <a name="resetLocalDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize"></a>

```java
public void resetLocalDiskMinSize()
```

##### `resetMinCores` <a name="resetMinCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores"></a>

```java
public void resetMinCores()
```

##### `resetMinGpus` <a name="resetMinGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus"></a>

```java
public void resetMinGpus()
```

##### `resetMinMemoryGb` <a name="resetMinMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb"></a>

```java
public void resetMinMemoryGb()
```

##### `resetPhotonDriverCapable` <a name="resetPhotonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable"></a>

```java
public void resetPhotonDriverCapable()
```

##### `resetPhotonWorkerCapable` <a name="resetPhotonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable"></a>

```java
public void resetPhotonWorkerCapable()
```

##### `resetSupportPortForwarding` <a name="resetSupportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding"></a>

```java
public void resetSupportPortForwarding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksNodeType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeType;

DataDatabricksNodeType.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeType;

DataDatabricksNodeType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeType;

DataDatabricksNodeType.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeType;

DataDatabricksNodeType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksNodeType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksNodeType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksNodeType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksNodeType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNodeType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput">fleetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput">gbPerCoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput">gravitonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput">isIoCacheEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput">localDiskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput">localDiskMinSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput">minCoresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput">minGpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput">minMemoryGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput">photonDriverCapableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput">photonWorkerCapableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput">supportPortForwardingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet">fleet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore">gbPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled">isIoCacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk">localDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize">localDiskMinSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores">minCores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus">minGpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb">minMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable">photonDriverCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable">photonWorkerCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding">supportPortForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput"></a>

```java
public java.lang.Object getFleetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gbPerCoreInput`<sup>Optional</sup> <a name="gbPerCoreInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput"></a>

```java
public java.lang.Number getGbPerCoreInput();
```

- *Type:* java.lang.Number

---

##### `gravitonInput`<sup>Optional</sup> <a name="gravitonInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput"></a>

```java
public java.lang.Object getGravitonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isIoCacheEnabledInput`<sup>Optional</sup> <a name="isIoCacheEnabledInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput"></a>

```java
public java.lang.Object getIsIoCacheEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localDiskInput`<sup>Optional</sup> <a name="localDiskInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput"></a>

```java
public java.lang.Object getLocalDiskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localDiskMinSizeInput`<sup>Optional</sup> <a name="localDiskMinSizeInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput"></a>

```java
public java.lang.Number getLocalDiskMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `minCoresInput`<sup>Optional</sup> <a name="minCoresInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput"></a>

```java
public java.lang.Number getMinCoresInput();
```

- *Type:* java.lang.Number

---

##### `minGpusInput`<sup>Optional</sup> <a name="minGpusInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput"></a>

```java
public java.lang.Number getMinGpusInput();
```

- *Type:* java.lang.Number

---

##### `minMemoryGbInput`<sup>Optional</sup> <a name="minMemoryGbInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput"></a>

```java
public java.lang.Number getMinMemoryGbInput();
```

- *Type:* java.lang.Number

---

##### `photonDriverCapableInput`<sup>Optional</sup> <a name="photonDriverCapableInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput"></a>

```java
public java.lang.Object getPhotonDriverCapableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `photonWorkerCapableInput`<sup>Optional</sup> <a name="photonWorkerCapableInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput"></a>

```java
public java.lang.Object getPhotonWorkerCapableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportPortForwardingInput`<sup>Optional</sup> <a name="supportPortForwardingInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput"></a>

```java
public java.lang.Object getSupportPortForwardingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet"></a>

```java
public java.lang.Object getFleet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gbPerCore`<sup>Required</sup> <a name="gbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore"></a>

```java
public java.lang.Number getGbPerCore();
```

- *Type:* java.lang.Number

---

##### `graviton`<sup>Required</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton"></a>

```java
public java.lang.Object getGraviton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIoCacheEnabled`<sup>Required</sup> <a name="isIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled"></a>

```java
public java.lang.Object getIsIoCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localDisk`<sup>Required</sup> <a name="localDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk"></a>

```java
public java.lang.Object getLocalDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localDiskMinSize`<sup>Required</sup> <a name="localDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize"></a>

```java
public java.lang.Number getLocalDiskMinSize();
```

- *Type:* java.lang.Number

---

##### `minCores`<sup>Required</sup> <a name="minCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores"></a>

```java
public java.lang.Number getMinCores();
```

- *Type:* java.lang.Number

---

##### `minGpus`<sup>Required</sup> <a name="minGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus"></a>

```java
public java.lang.Number getMinGpus();
```

- *Type:* java.lang.Number

---

##### `minMemoryGb`<sup>Required</sup> <a name="minMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb"></a>

```java
public java.lang.Number getMinMemoryGb();
```

- *Type:* java.lang.Number

---

##### `photonDriverCapable`<sup>Required</sup> <a name="photonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable"></a>

```java
public java.lang.Object getPhotonDriverCapable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `photonWorkerCapable`<sup>Required</sup> <a name="photonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable"></a>

```java
public java.lang.Object getPhotonWorkerCapable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportPortForwarding`<sup>Required</sup> <a name="supportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding"></a>

```java
public java.lang.Object getSupportPortForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNodeTypeConfig <a name="DataDatabricksNodeTypeConfig" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_node_type.DataDatabricksNodeTypeConfig;

DataDatabricksNodeTypeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .category(java.lang.String)
//  .fleet(java.lang.Boolean)
//  .fleet(IResolvable)
//  .gbPerCore(java.lang.Number)
//  .graviton(java.lang.Boolean)
//  .graviton(IResolvable)
//  .id(java.lang.String)
//  .isIoCacheEnabled(java.lang.Boolean)
//  .isIoCacheEnabled(IResolvable)
//  .localDisk(java.lang.Boolean)
//  .localDisk(IResolvable)
//  .localDiskMinSize(java.lang.Number)
//  .minCores(java.lang.Number)
//  .minGpus(java.lang.Number)
//  .minMemoryGb(java.lang.Number)
//  .photonDriverCapable(java.lang.Boolean)
//  .photonDriverCapable(IResolvable)
//  .photonWorkerCapable(java.lang.Boolean)
//  .photonWorkerCapable(IResolvable)
//  .supportPortForwarding(java.lang.Boolean)
//  .supportPortForwarding(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet">fleet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore">gbPerCore</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton">graviton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled">isIoCacheEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk">localDisk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize">localDiskMinSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores">minCores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus">minGpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb">minMemoryGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable">photonDriverCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable">photonWorkerCapable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding">supportPortForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `fleet`<sup>Optional</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet"></a>

```java
public java.lang.Object getFleet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `gbPerCore`<sup>Optional</sup> <a name="gbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore"></a>

```java
public java.lang.Number getGbPerCore();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton"></a>

```java
public java.lang.Object getGraviton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIoCacheEnabled`<sup>Optional</sup> <a name="isIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled"></a>

```java
public java.lang.Object getIsIoCacheEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `localDisk`<sup>Optional</sup> <a name="localDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk"></a>

```java
public java.lang.Object getLocalDisk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `localDiskMinSize`<sup>Optional</sup> <a name="localDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize"></a>

```java
public java.lang.Number getLocalDiskMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `minCores`<sup>Optional</sup> <a name="minCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores"></a>

```java
public java.lang.Number getMinCores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `minGpus`<sup>Optional</sup> <a name="minGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus"></a>

```java
public java.lang.Number getMinGpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `minMemoryGb`<sup>Optional</sup> <a name="minMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb"></a>

```java
public java.lang.Number getMinMemoryGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `photonDriverCapable`<sup>Optional</sup> <a name="photonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable"></a>

```java
public java.lang.Object getPhotonDriverCapable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `photonWorkerCapable`<sup>Optional</sup> <a name="photonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable"></a>

```java
public java.lang.Object getPhotonWorkerCapable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `supportPortForwarding`<sup>Optional</sup> <a name="supportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding"></a>

```java
public java.lang.Object getSupportPortForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---




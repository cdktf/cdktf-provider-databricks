# `pipeline` Submodule <a name="`pipeline` Submodule" id="@cdktf/provider-databricks.pipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipeline <a name="Pipeline" id="@cdktf/provider-databricks.pipeline.Pipeline"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline databricks_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.Pipeline;

Pipeline.Builder.create(Construct scope, java.lang.String id)
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
//  .allowDuplicateNames(java.lang.Boolean)
//  .allowDuplicateNames(IResolvable)
//  .catalog(java.lang.String)
//  .channel(java.lang.String)
//  .cluster(IResolvable)
//  .cluster(java.util.List<PipelineCluster>)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .continuous(java.lang.Boolean)
//  .continuous(IResolvable)
//  .deployment(PipelineDeployment)
//  .development(java.lang.Boolean)
//  .development(IResolvable)
//  .edition(java.lang.String)
//  .filters(PipelineFilters)
//  .id(java.lang.String)
//  .library(IResolvable)
//  .library(java.util.List<PipelineLibrary>)
//  .name(java.lang.String)
//  .notification(IResolvable)
//  .notification(java.util.List<PipelineNotification>)
//  .photon(java.lang.Boolean)
//  .photon(IResolvable)
//  .serverless(java.lang.Boolean)
//  .serverless(IResolvable)
//  .storage(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(PipelineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.allowDuplicateNames">allowDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.channel">channel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.cluster">cluster</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>></code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.continuous">continuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.development">development</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.library">library</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>></code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.serverless">serverless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.storage">storage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowDuplicateNames`<sup>Optional</sup> <a name="allowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.allowDuplicateNames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.channel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.cluster"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>>

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.configuration"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.continuous"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#deployment Pipeline#deployment}

---

##### `development`<sup>Optional</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.development"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.library"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>>

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#library Pipeline#library}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.notification"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.photon"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `serverless`<sup>Optional</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.serverless"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.storage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putCluster">putCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLibrary">putLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames">resetAllowDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment">resetDevelopment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary">resetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton">resetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetServerless">resetServerless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.Pipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCluster` <a name="putCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster"></a>

```java
public void putCluster(IResolvable OR java.util.List<PipelineCluster> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>>

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-databricks.pipeline.Pipeline.putDeployment"></a>

```java
public void putDeployment(PipelineDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters"></a>

```java
public void putFilters(PipelineFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `putLibrary` <a name="putLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary"></a>

```java
public void putLibrary(IResolvable OR java.util.List<PipelineLibrary> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>>

---

##### `putNotification` <a name="putNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification"></a>

```java
public void putNotification(IResolvable OR java.util.List<PipelineNotification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts"></a>

```java
public void putTimeouts(PipelineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---

##### `resetAllowDuplicateNames` <a name="resetAllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames"></a>

```java
public void resetAllowDuplicateNames()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-databricks.pipeline.Pipeline.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDeployment"></a>

```java
public void resetDeployment()
```

##### `resetDevelopment` <a name="resetDevelopment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment"></a>

```java
public void resetDevelopment()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetId"></a>

```java
public void resetId()
```

##### `resetLibrary` <a name="resetLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary"></a>

```java
public void resetLibrary()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.pipeline.Pipeline.resetName"></a>

```java
public void resetName()
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.resetNotification"></a>

```java
public void resetNotification()
```

##### `resetPhoton` <a name="resetPhoton" id="@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton"></a>

```java
public void resetPhoton()
```

##### `resetServerless` <a name="resetServerless" id="@cdktf/provider-databricks.pipeline.Pipeline.resetServerless"></a>

```java
public void resetServerless()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-databricks.pipeline.Pipeline.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.Pipeline;

Pipeline.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.Pipeline;

Pipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.Pipeline;

Pipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.Pipeline;

Pipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Pipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cluster">cluster</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference">PipelineDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.library">library</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput">allowDuplicateNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput">clusterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput">configurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput">continuousInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput">developmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput">libraryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput">notificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput">photonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput">serverlessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput">storageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames">allowDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuous">continuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.development">development</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverless">serverless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storage">storage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.pipeline.Pipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.Pipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.Pipeline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.pipeline.Pipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cluster"></a>

```java
public PipelineClusterList getCluster();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-databricks.pipeline.Pipeline.property.deployment"></a>

```java
public PipelineDeploymentOutputReference getDeployment();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference">PipelineDeploymentOutputReference</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filters"></a>

```java
public PipelineFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a>

---

##### `library`<sup>Required</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.Pipeline.property.library"></a>

```java
public PipelineLibraryList getLibrary();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notification"></a>

```java
public PipelineNotificationList getNotification();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts"></a>

```java
public PipelineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.pipeline.Pipeline.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `allowDuplicateNamesInput`<sup>Optional</sup> <a name="allowDuplicateNamesInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput"></a>

```java
public java.lang.Object getAllowDuplicateNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput"></a>

```java
public java.lang.Object getClusterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput"></a>

```java
public java.lang.Object getContinuousInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.deploymentInput"></a>

```java
public PipelineDeployment getDeploymentInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---

##### `developmentInput`<sup>Optional</sup> <a name="developmentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput"></a>

```java
public java.lang.Object getDevelopmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput"></a>

```java
public PipelineFilters getFiltersInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `libraryInput`<sup>Optional</sup> <a name="libraryInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput"></a>

```java
public java.lang.Object getLibraryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput"></a>

```java
public java.lang.Object getNotificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>>

---

##### `photonInput`<sup>Optional</sup> <a name="photonInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput"></a>

```java
public java.lang.Object getPhotonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverlessInput`<sup>Optional</sup> <a name="serverlessInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput"></a>

```java
public java.lang.Object getServerlessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput"></a>

```java
public java.lang.String getStorageInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---

##### `allowDuplicateNames`<sup>Required</sup> <a name="allowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames"></a>

```java
public java.lang.Object getAllowDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuous"></a>

```java
public java.lang.Object getContinuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `development`<sup>Required</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.Pipeline.property.development"></a>

```java
public java.lang.Object getDevelopment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.Pipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `photon`<sup>Required</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photon"></a>

```java
public java.lang.Object getPhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverless`<sup>Required</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverless"></a>

```java
public java.lang.Object getServerless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.Pipeline.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineCluster <a name="PipelineCluster" id="@cdktf/provider-databricks.pipeline.PipelineCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineCluster;

PipelineCluster.builder()
//  .applyPolicyDefaultValues(java.lang.Boolean)
//  .applyPolicyDefaultValues(IResolvable)
//  .autoscale(PipelineClusterAutoscale)
//  .awsAttributes(PipelineClusterAwsAttributes)
//  .azureAttributes(PipelineClusterAzureAttributes)
//  .clusterLogConf(PipelineClusterClusterLogConf)
//  .customTags(java.util.Map<java.lang.String, java.lang.String>)
//  .driverInstancePoolId(java.lang.String)
//  .driverNodeTypeId(java.lang.String)
//  .enableLocalDiskEncryption(java.lang.Boolean)
//  .enableLocalDiskEncryption(IResolvable)
//  .gcpAttributes(PipelineClusterGcpAttributes)
//  .initScripts(IResolvable)
//  .initScripts(java.util.List<PipelineClusterInitScripts>)
//  .instancePoolId(java.lang.String)
//  .label(java.lang.String)
//  .nodeTypeId(java.lang.String)
//  .numWorkers(java.lang.Number)
//  .policyId(java.lang.String)
//  .sparkConf(java.util.Map<java.lang.String, java.lang.String>)
//  .sparkEnvVars(java.util.Map<java.lang.String, java.lang.String>)
//  .sshPublicKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts">initScripts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>></code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#label Pipeline#label}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#num_workers Pipeline#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#policy_id Pipeline#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf">sparkConf</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars">sparkEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}. |

---

##### `applyPolicyDefaultValues`<sup>Optional</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues"></a>

```java
public java.lang.Object getApplyPolicyDefaultValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}.

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale"></a>

```java
public PipelineClusterAutoscale getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#autoscale Pipeline#autoscale}

---

##### `awsAttributes`<sup>Optional</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes"></a>

```java
public PipelineClusterAwsAttributes getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}

---

##### `azureAttributes`<sup>Optional</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes"></a>

```java
public PipelineClusterAzureAttributes getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}

---

##### `clusterLogConf`<sup>Optional</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf"></a>

```java
public PipelineClusterClusterLogConf getClusterLogConf();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}.

---

##### `driverInstancePoolId`<sup>Optional</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId"></a>

```java
public java.lang.String getDriverInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}.

---

##### `driverNodeTypeId`<sup>Optional</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId"></a>

```java
public java.lang.String getDriverNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}.

---

##### `enableLocalDiskEncryption`<sup>Optional</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption"></a>

```java
public java.lang.Object getEnableLocalDiskEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}.

---

##### `gcpAttributes`<sup>Optional</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes"></a>

```java
public PipelineClusterGcpAttributes getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}

---

##### `initScripts`<sup>Optional</sup> <a name="initScripts" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts"></a>

```java
public java.lang.Object getInitScripts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>>

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#init_scripts Pipeline#init_scripts}

---

##### `instancePoolId`<sup>Optional</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#label Pipeline#label}.

---

##### `nodeTypeId`<sup>Optional</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}.

---

##### `numWorkers`<sup>Optional</sup> <a name="numWorkers" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#num_workers Pipeline#num_workers}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#policy_id Pipeline#policy_id}.

---

##### `sparkConf`<sup>Optional</sup> <a name="sparkConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConf();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}.

---

##### `sparkEnvVars`<sup>Optional</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}.

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}.

---

### PipelineClusterAutoscale <a name="PipelineClusterAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAutoscale;

PipelineClusterAutoscale.builder()
//  .maxWorkers(java.lang.Number)
//  .minWorkers(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#max_workers Pipeline#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#min_workers Pipeline#min_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#mode Pipeline#mode}. |

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#mode Pipeline#mode}.

---

### PipelineClusterAwsAttributes <a name="PipelineClusterAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAwsAttributes;

PipelineClusterAwsAttributes.builder()
//  .availability(java.lang.String)
//  .ebsVolumeCount(java.lang.Number)
//  .ebsVolumeSize(java.lang.Number)
//  .ebsVolumeType(java.lang.String)
//  .firstOnDemand(java.lang.Number)
//  .instanceProfileArn(java.lang.String)
//  .spotBidPricePercent(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `ebsVolumeCount`<sup>Optional</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount"></a>

```java
public java.lang.Number getEbsVolumeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

##### `ebsVolumeSize`<sup>Optional</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

##### `spotBidPricePercent`<sup>Optional</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterAzureAttributes <a name="PipelineClusterAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAzureAttributes;

PipelineClusterAzureAttributes.builder()
//  .availability(java.lang.String)
//  .firstOnDemand(java.lang.Number)
//  .spotBidMaxPrice(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `firstOnDemand`<sup>Optional</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `spotBidMaxPrice`<sup>Optional</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

### PipelineClusterClusterLogConf <a name="PipelineClusterClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConf;

PipelineClusterClusterLogConf.builder()
//  .dbfs(PipelineClusterClusterLogConfDbfs)
//  .s3(PipelineClusterClusterLogConfS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs"></a>

```java
public PipelineClusterClusterLogConfDbfs getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3"></a>

```java
public PipelineClusterClusterLogConfS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#s3 Pipeline#s3}

---

### PipelineClusterClusterLogConfDbfs <a name="PipelineClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConfDbfs;

PipelineClusterClusterLogConfDbfs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterClusterLogConfS3 <a name="PipelineClusterClusterLogConfS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConfS3;

PipelineClusterClusterLogConfS3.builder()
    .destination(java.lang.String)
//  .cannedAcl(java.lang.String)
//  .enableEncryption(java.lang.Boolean)
//  .enableEncryption(IResolvable)
//  .encryptionType(java.lang.String)
//  .endpoint(java.lang.String)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterGcpAttributes <a name="PipelineClusterGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterGcpAttributes;

PipelineClusterGcpAttributes.builder()
//  .availability(java.lang.String)
//  .googleServiceAccount(java.lang.String)
//  .localSsdCount(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability">availability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `availability`<sup>Optional</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

##### `localSsdCount`<sup>Optional</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterInitScripts <a name="PipelineClusterInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScripts;

PipelineClusterInitScripts.builder()
//  .abfss(PipelineClusterInitScriptsAbfss)
//  .dbfs(PipelineClusterInitScriptsDbfs)
//  .file(PipelineClusterInitScriptsFile)
//  .gcs(PipelineClusterInitScriptsGcs)
//  .s3(PipelineClusterInitScriptsS3)
//  .volumes(PipelineClusterInitScriptsVolumes)
//  .workspace(PipelineClusterInitScriptsWorkspace)
    .build();
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

```java
public PipelineClusterInitScriptsAbfss getAbfss();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#abfss Pipeline#abfss}

---

##### `dbfs`<sup>Optional</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs"></a>

```java
public PipelineClusterInitScriptsDbfs getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file"></a>

```java
public PipelineClusterInitScriptsFile getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#file Pipeline#file}

---

##### `gcs`<sup>Optional</sup> <a name="gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs"></a>

```java
public PipelineClusterInitScriptsGcs getGcs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#gcs Pipeline#gcs}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3"></a>

```java
public PipelineClusterInitScriptsS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes"></a>

```java
public PipelineClusterInitScriptsVolumes getVolumes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#volumes Pipeline#volumes}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace"></a>

```java
public PipelineClusterInitScriptsWorkspace getWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#workspace Pipeline#workspace}

---

### PipelineClusterInitScriptsAbfss <a name="PipelineClusterInitScriptsAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsAbfss;

PipelineClusterInitScriptsAbfss.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsDbfs <a name="PipelineClusterInitScriptsDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsDbfs;

PipelineClusterInitScriptsDbfs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsFile <a name="PipelineClusterInitScriptsFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsFile;

PipelineClusterInitScriptsFile.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsGcs <a name="PipelineClusterInitScriptsGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsGcs;

PipelineClusterInitScriptsGcs.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsS3 <a name="PipelineClusterInitScriptsS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsS3;

PipelineClusterInitScriptsS3.builder()
    .destination(java.lang.String)
//  .cannedAcl(java.lang.String)
//  .enableEncryption(java.lang.Boolean)
//  .enableEncryption(IResolvable)
//  .encryptionType(java.lang.String)
//  .endpoint(java.lang.String)
//  .kmsKey(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `cannedAcl`<sup>Optional</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `enableEncryption`<sup>Optional</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterInitScriptsVolumes <a name="PipelineClusterInitScriptsVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsVolumes;

PipelineClusterInitScriptsVolumes.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsWorkspace <a name="PipelineClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsWorkspace;

PipelineClusterInitScriptsWorkspace.builder()
    .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineConfig <a name="PipelineConfig" id="@cdktf/provider-databricks.pipeline.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineConfig;

PipelineConfig.builder()
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
//  .allowDuplicateNames(java.lang.Boolean)
//  .allowDuplicateNames(IResolvable)
//  .catalog(java.lang.String)
//  .channel(java.lang.String)
//  .cluster(IResolvable)
//  .cluster(java.util.List<PipelineCluster>)
//  .configuration(java.util.Map<java.lang.String, java.lang.String>)
//  .continuous(java.lang.Boolean)
//  .continuous(IResolvable)
//  .deployment(PipelineDeployment)
//  .development(java.lang.Boolean)
//  .development(IResolvable)
//  .edition(java.lang.String)
//  .filters(PipelineFilters)
//  .id(java.lang.String)
//  .library(IResolvable)
//  .library(java.util.List<PipelineLibrary>)
//  .name(java.lang.String)
//  .notification(IResolvable)
//  .notification(java.util.List<PipelineNotification>)
//  .photon(java.lang.Boolean)
//  .photon(IResolvable)
//  .serverless(java.lang.Boolean)
//  .serverless(IResolvable)
//  .storage(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(PipelineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames">allowDuplicateNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel">channel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster">cluster</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>></code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration">configuration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous">continuous</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.development">development</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.library">library</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>></code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification">notification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>></code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon">photon</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless">serverless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage">storage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowDuplicateNames`<sup>Optional</sup> <a name="allowDuplicateNames" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames"></a>

```java
public java.lang.Object getAllowDuplicateNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster"></a>

```java
public java.lang.Object getCluster();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>>

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous"></a>

```java
public java.lang.Object getContinuous();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.deployment"></a>

```java
public PipelineDeployment getDeployment();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#deployment Pipeline#deployment}

---

##### `development`<sup>Optional</sup> <a name="development" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.development"></a>

```java
public java.lang.Object getDevelopment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters"></a>

```java
public PipelineFilters getFilters();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `library`<sup>Optional</sup> <a name="library" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.library"></a>

```java
public java.lang.Object getLibrary();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>>

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#library Pipeline#library}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification"></a>

```java
public java.lang.Object getNotification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>>

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `photon`<sup>Optional</sup> <a name="photon" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon"></a>

```java
public java.lang.Object getPhoton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `serverless`<sup>Optional</sup> <a name="serverless" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless"></a>

```java
public java.lang.Object getServerless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts"></a>

```java
public PipelineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

### PipelineDeployment <a name="PipelineDeployment" id="@cdktf/provider-databricks.pipeline.PipelineDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineDeployment;

PipelineDeployment.builder()
//  .kind(java.lang.String)
//  .metadataFilePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kind Pipeline#kind}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment.property.metadataFilePath">metadataFilePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#metadata_file_path Pipeline#metadata_file_path}. |

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#kind Pipeline#kind}.

---

##### `metadataFilePath`<sup>Optional</sup> <a name="metadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.property.metadataFilePath"></a>

```java
public java.lang.String getMetadataFilePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#metadata_file_path Pipeline#metadata_file_path}.

---

### PipelineFilters <a name="PipelineFilters" id="@cdktf/provider-databricks.pipeline.PipelineFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineFilters;

PipelineFilters.builder()
//  .exclude(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#exclude Pipeline#exclude}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#include Pipeline#include}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#include Pipeline#include}.

---

### PipelineLibrary <a name="PipelineLibrary" id="@cdktf/provider-databricks.pipeline.PipelineLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibrary;

PipelineLibrary.builder()
//  .file(PipelineLibraryFile)
//  .jar(java.lang.String)
//  .maven(PipelineLibraryMaven)
//  .notebook(PipelineLibraryNotebook)
//  .whl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#jar Pipeline#jar}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl">whl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#whl Pipeline#whl}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file"></a>

```java
public PipelineLibraryFile getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#file Pipeline#file}

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#jar Pipeline#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven"></a>

```java
public PipelineLibraryMaven getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#maven Pipeline#maven}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook"></a>

```java
public PipelineLibraryNotebook getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#notebook Pipeline#notebook}

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#whl Pipeline#whl}.

---

### PipelineLibraryFile <a name="PipelineLibraryFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryFile;

PipelineLibraryFile.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineLibraryMaven <a name="PipelineLibraryMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryMaven;

PipelineLibraryMaven.builder()
    .coordinates(java.lang.String)
//  .exclusions(java.util.List<java.lang.String>)
//  .repo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#coordinates Pipeline#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#exclusions Pipeline#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo">repo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#repo Pipeline#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#repo Pipeline#repo}.

---

### PipelineLibraryNotebook <a name="PipelineLibraryNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryNotebook;

PipelineLibraryNotebook.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineNotification <a name="PipelineNotification" id="@cdktf/provider-databricks.pipeline.PipelineNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineNotification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineNotification;

PipelineNotification.builder()
    .alerts(java.util.List<java.lang.String>)
    .emailRecipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts">alerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#alerts Pipeline#alerts}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients">emailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}. |

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts"></a>

```java
public java.util.List<java.lang.String> getAlerts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#alerts Pipeline#alerts}.

---

##### `emailRecipients`<sup>Required</sup> <a name="emailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients"></a>

```java
public java.util.List<java.lang.String> getEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}.

---

### PipelineTimeouts <a name="PipelineTimeouts" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineTimeouts;

PipelineTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#default Pipeline#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/resources/pipeline#default Pipeline#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineClusterAutoscaleOutputReference <a name="PipelineClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAutoscaleOutputReference;

new PipelineClusterAutoscaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers">resetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetMinWorkers` <a name="resetMinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers"></a>

```java
public void resetMinWorkers()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput">minWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `minWorkersInput`<sup>Optional</sup> <a name="minWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```java
public java.lang.Number getMinWorkersInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `minWorkers`<sup>Required</sup> <a name="minWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue"></a>

```java
public PipelineClusterAutoscale getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---


### PipelineClusterAwsAttributesOutputReference <a name="PipelineClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAwsAttributesOutputReference;

new PipelineClusterAwsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount">resetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize">resetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType">resetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent">resetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetEbsVolumeCount` <a name="resetEbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```java
public void resetEbsVolumeCount()
```

##### `resetEbsVolumeSize` <a name="resetEbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```java
public void resetEbsVolumeSize()
```

##### `resetEbsVolumeType` <a name="resetEbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```java
public void resetEbsVolumeType()
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```java
public void resetFirstOnDemand()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetSpotBidPricePercent` <a name="resetSpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```java
public void resetSpotBidPricePercent()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">ebsVolumeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">ebsVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">ebsVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">spotBidPricePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount">ebsVolumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize">ebsVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType">ebsVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent">spotBidPricePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `ebsVolumeCountInput`<sup>Optional</sup> <a name="ebsVolumeCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```java
public java.lang.Number getEbsVolumeCountInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSizeInput`<sup>Optional</sup> <a name="ebsVolumeSizeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```java
public java.lang.Number getEbsVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeTypeInput`<sup>Optional</sup> <a name="ebsVolumeTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```java
public java.lang.String getEbsVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```java
public java.lang.Number getFirstOnDemandInput();
```

- *Type:* java.lang.Number

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercentInput`<sup>Optional</sup> <a name="spotBidPricePercentInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```java
public java.lang.Number getSpotBidPricePercentInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `ebsVolumeCount`<sup>Required</sup> <a name="ebsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```java
public java.lang.Number getEbsVolumeCount();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeSize`<sup>Required</sup> <a name="ebsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```java
public java.lang.Number getEbsVolumeSize();
```

- *Type:* java.lang.Number

---

##### `ebsVolumeType`<sup>Required</sup> <a name="ebsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```java
public java.lang.String getEbsVolumeType();
```

- *Type:* java.lang.String

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `spotBidPricePercent`<sup>Required</sup> <a name="spotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```java
public java.lang.Number getSpotBidPricePercent();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue"></a>

```java
public PipelineClusterAwsAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---


### PipelineClusterAzureAttributesOutputReference <a name="PipelineClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterAzureAttributesOutputReference;

new PipelineClusterAzureAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand">resetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">resetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetFirstOnDemand` <a name="resetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```java
public void resetFirstOnDemand()
```

##### `resetSpotBidMaxPrice` <a name="resetSpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```java
public void resetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput">firstOnDemandInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">spotBidMaxPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand">firstOnDemand</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice">spotBidMaxPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `firstOnDemandInput`<sup>Optional</sup> <a name="firstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```java
public java.lang.Number getFirstOnDemandInput();
```

- *Type:* java.lang.Number

---

##### `spotBidMaxPriceInput`<sup>Optional</sup> <a name="spotBidMaxPriceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```java
public java.lang.Number getSpotBidMaxPriceInput();
```

- *Type:* java.lang.Number

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `firstOnDemand`<sup>Required</sup> <a name="firstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```java
public java.lang.Number getFirstOnDemand();
```

- *Type:* java.lang.Number

---

##### `spotBidMaxPrice`<sup>Required</sup> <a name="spotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```java
public java.lang.Number getSpotBidMaxPrice();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue"></a>

```java
public PipelineClusterAzureAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---


### PipelineClusterClusterLogConfDbfsOutputReference <a name="PipelineClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference;

new PipelineClusterClusterLogConfDbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```java
public PipelineClusterClusterLogConfDbfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---


### PipelineClusterClusterLogConfOutputReference <a name="PipelineClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConfOutputReference;

new PipelineClusterClusterLogConfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs"></a>

```java
public void putDbfs(PipelineClusterClusterLogConfDbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3"></a>

```java
public void putS3(PipelineClusterClusterLogConfS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs"></a>

```java
public void resetDbfs()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3"></a>

```java
public void resetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs"></a>

```java
public PipelineClusterClusterLogConfDbfsOutputReference getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3"></a>

```java
public PipelineClusterClusterLogConfS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```java
public PipelineClusterClusterLogConfDbfs getDbfsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input"></a>

```java
public PipelineClusterClusterLogConfS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue"></a>

```java
public PipelineClusterClusterLogConf getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---


### PipelineClusterClusterLogConfS3OutputReference <a name="PipelineClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference;

new PipelineClusterClusterLogConfS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```java
public void resetCannedAcl()
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```java
public void resetEnableEncryption()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```java
public java.lang.String getCannedAclInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```java
public java.lang.Object getEnableEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```java
public PipelineClusterClusterLogConfS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---


### PipelineClusterGcpAttributesOutputReference <a name="PipelineClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterGcpAttributesOutputReference;

new PipelineClusterGcpAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount">resetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability"></a>

```java
public void resetAvailability()
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```java
public void resetGoogleServiceAccount()
```

##### `resetLocalSsdCount` <a name="resetLocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```java
public void resetLocalSsdCount()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId"></a>

```java
public void resetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput">localSsdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability">availability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount">localSsdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```java
public java.lang.String getAvailabilityInput();
```

- *Type:* java.lang.String

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `localSsdCountInput`<sup>Optional</sup> <a name="localSsdCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```java
public java.lang.Number getLocalSsdCountInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availability`<sup>Required</sup> <a name="availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability"></a>

```java
public java.lang.String getAvailability();
```

- *Type:* java.lang.String

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `localSsdCount`<sup>Required</sup> <a name="localSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```java
public java.lang.Number getLocalSsdCount();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue"></a>

```java
public PipelineClusterGcpAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---


### PipelineClusterInitScriptsAbfssOutputReference <a name="PipelineClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference;

new PipelineClusterInitScriptsAbfssOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsAbfss getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---


### PipelineClusterInitScriptsDbfsOutputReference <a name="PipelineClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference;

new PipelineClusterInitScriptsDbfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsDbfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---


### PipelineClusterInitScriptsFileOutputReference <a name="PipelineClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsFileOutputReference;

new PipelineClusterInitScriptsFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---


### PipelineClusterInitScriptsGcsOutputReference <a name="PipelineClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference;

new PipelineClusterInitScriptsGcsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsGcs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---


### PipelineClusterInitScriptsList <a name="PipelineClusterInitScriptsList" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsList;

new PipelineClusterInitScriptsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get"></a>

```java
public PipelineClusterInitScriptsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>>

---


### PipelineClusterInitScriptsOutputReference <a name="PipelineClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsOutputReference;

new PipelineClusterInitScriptsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss">putAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs">putDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs">putGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace">putWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss">resetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs">resetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs">resetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbfss` <a name="putAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss"></a>

```java
public void putAbfss(PipelineClusterInitScriptsAbfss value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `putDbfs` <a name="putDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs"></a>

```java
public void putDbfs(PipelineClusterInitScriptsDbfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `putFile` <a name="putFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile"></a>

```java
public void putFile(PipelineClusterInitScriptsFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `putGcs` <a name="putGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs"></a>

```java
public void putGcs(PipelineClusterInitScriptsGcs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3"></a>

```java
public void putS3(PipelineClusterInitScriptsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes"></a>

```java
public void putVolumes(PipelineClusterInitScriptsVolumes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `putWorkspace` <a name="putWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace"></a>

```java
public void putWorkspace(PipelineClusterInitScriptsWorkspace value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `resetAbfss` <a name="resetAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss"></a>

```java
public void resetAbfss()
```

##### `resetDbfs` <a name="resetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs"></a>

```java
public void resetDbfs()
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetGcs` <a name="resetGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs"></a>

```java
public void resetGcs()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3"></a>

```java
public void resetS3()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace"></a>

```java
public void resetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss">abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs">dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs">gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace">workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput">abfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput">dbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput">gcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput">volumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput">workspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abfss`<sup>Required</sup> <a name="abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss"></a>

```java
public PipelineClusterInitScriptsAbfssOutputReference getAbfss();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a>

---

##### `dbfs`<sup>Required</sup> <a name="dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs"></a>

```java
public PipelineClusterInitScriptsDbfsOutputReference getDbfs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a>

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file"></a>

```java
public PipelineClusterInitScriptsFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a>

---

##### `gcs`<sup>Required</sup> <a name="gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs"></a>

```java
public PipelineClusterInitScriptsGcsOutputReference getGcs();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3"></a>

```java
public PipelineClusterInitScriptsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes"></a>

```java
public PipelineClusterInitScriptsVolumesOutputReference getVolumes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a>

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace"></a>

```java
public PipelineClusterInitScriptsWorkspaceOutputReference getWorkspace();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a>

---

##### `abfssInput`<sup>Optional</sup> <a name="abfssInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput"></a>

```java
public PipelineClusterInitScriptsAbfss getAbfssInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `dbfsInput`<sup>Optional</sup> <a name="dbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput"></a>

```java
public PipelineClusterInitScriptsDbfs getDbfsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput"></a>

```java
public PipelineClusterInitScriptsFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `gcsInput`<sup>Optional</sup> <a name="gcsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput"></a>

```java
public PipelineClusterInitScriptsGcs getGcsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input"></a>

```java
public PipelineClusterInitScriptsS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput"></a>

```java
public PipelineClusterInitScriptsVolumes getVolumesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput"></a>

```java
public PipelineClusterInitScriptsWorkspace getWorkspaceInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>

---


### PipelineClusterInitScriptsS3OutputReference <a name="PipelineClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsS3OutputReference;

new PipelineClusterInitScriptsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl">resetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption">resetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCannedAcl` <a name="resetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```java
public void resetCannedAcl()
```

##### `resetEnableEncryption` <a name="resetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```java
public void resetEnableEncryption()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput">cannedAclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput">enableEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl">cannedAcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption">enableEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cannedAclInput`<sup>Optional</sup> <a name="cannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```java
public java.lang.String getCannedAclInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `enableEncryptionInput`<sup>Optional</sup> <a name="enableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```java
public java.lang.Object getEnableEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cannedAcl`<sup>Required</sup> <a name="cannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```java
public java.lang.String getCannedAcl();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `enableEncryption`<sup>Required</sup> <a name="enableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```java
public java.lang.Object getEnableEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---


### PipelineClusterInitScriptsVolumesOutputReference <a name="PipelineClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference;

new PipelineClusterInitScriptsVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---


### PipelineClusterInitScriptsWorkspaceOutputReference <a name="PipelineClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference;

new PipelineClusterInitScriptsWorkspaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```java
public PipelineClusterInitScriptsWorkspace getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---


### PipelineClusterList <a name="PipelineClusterList" id="@cdktf/provider-databricks.pipeline.PipelineClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterList;

new PipelineClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get"></a>

```java
public PipelineClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>>

---


### PipelineClusterOutputReference <a name="PipelineClusterOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineClusterOutputReference;

new PipelineClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes">putAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes">putAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf">putClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes">putGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts">putInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues">resetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes">resetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes">resetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf">resetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId">resetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId">resetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption">resetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes">resetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts">resetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId">resetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId">resetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers">resetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf">resetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars">resetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale"></a>

```java
public void putAutoscale(PipelineClusterAutoscale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `putAwsAttributes` <a name="putAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes"></a>

```java
public void putAwsAttributes(PipelineClusterAwsAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `putAzureAttributes` <a name="putAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes"></a>

```java
public void putAzureAttributes(PipelineClusterAzureAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `putClusterLogConf` <a name="putClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf"></a>

```java
public void putClusterLogConf(PipelineClusterClusterLogConf value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `putGcpAttributes` <a name="putGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes"></a>

```java
public void putGcpAttributes(PipelineClusterGcpAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `putInitScripts` <a name="putInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts"></a>

```java
public void putInitScripts(IResolvable OR java.util.List<PipelineClusterInitScripts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>>

---

##### `resetApplyPolicyDefaultValues` <a name="resetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues"></a>

```java
public void resetApplyPolicyDefaultValues()
```

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale"></a>

```java
public void resetAutoscale()
```

##### `resetAwsAttributes` <a name="resetAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes"></a>

```java
public void resetAwsAttributes()
```

##### `resetAzureAttributes` <a name="resetAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes"></a>

```java
public void resetAzureAttributes()
```

##### `resetClusterLogConf` <a name="resetClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf"></a>

```java
public void resetClusterLogConf()
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags"></a>

```java
public void resetCustomTags()
```

##### `resetDriverInstancePoolId` <a name="resetDriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId"></a>

```java
public void resetDriverInstancePoolId()
```

##### `resetDriverNodeTypeId` <a name="resetDriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId"></a>

```java
public void resetDriverNodeTypeId()
```

##### `resetEnableLocalDiskEncryption` <a name="resetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption"></a>

```java
public void resetEnableLocalDiskEncryption()
```

##### `resetGcpAttributes` <a name="resetGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes"></a>

```java
public void resetGcpAttributes()
```

##### `resetInitScripts` <a name="resetInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts"></a>

```java
public void resetInitScripts()
```

##### `resetInstancePoolId` <a name="resetInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId"></a>

```java
public void resetInstancePoolId()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetNodeTypeId` <a name="resetNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId"></a>

```java
public void resetNodeTypeId()
```

##### `resetNumWorkers` <a name="resetNumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers"></a>

```java
public void resetNumWorkers()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetSparkConf` <a name="resetSparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf"></a>

```java
public void resetSparkConf()
```

##### `resetSparkEnvVars` <a name="resetSparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars"></a>

```java
public void resetSparkEnvVars()
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys"></a>

```java
public void resetSshPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes">awsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes">azureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf">clusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes">gcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts">initScripts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput">applyPolicyDefaultValuesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput">awsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput">azureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput">clusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput">customTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput">driverInstancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput">driverNodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput">enableLocalDiskEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput">gcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput">initScriptsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput">instancePoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput">nodeTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput">numWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput">sparkConfInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput">sparkEnvVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues">applyPolicyDefaultValues</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags">customTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId">driverInstancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId">driverNodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption">enableLocalDiskEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId">nodeTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers">numWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf">sparkConf</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars">sparkEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale"></a>

```java
public PipelineClusterAutoscaleOutputReference getAutoscale();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a>

---

##### `awsAttributes`<sup>Required</sup> <a name="awsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes"></a>

```java
public PipelineClusterAwsAttributesOutputReference getAwsAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a>

---

##### `azureAttributes`<sup>Required</sup> <a name="azureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes"></a>

```java
public PipelineClusterAzureAttributesOutputReference getAzureAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a>

---

##### `clusterLogConf`<sup>Required</sup> <a name="clusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf"></a>

```java
public PipelineClusterClusterLogConfOutputReference getClusterLogConf();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a>

---

##### `gcpAttributes`<sup>Required</sup> <a name="gcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes"></a>

```java
public PipelineClusterGcpAttributesOutputReference getGcpAttributes();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a>

---

##### `initScripts`<sup>Required</sup> <a name="initScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts"></a>

```java
public PipelineClusterInitScriptsList getInitScripts();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a>

---

##### `applyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="applyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput"></a>

```java
public java.lang.Object getApplyPolicyDefaultValuesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput"></a>

```java
public PipelineClusterAutoscale getAutoscaleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `awsAttributesInput`<sup>Optional</sup> <a name="awsAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput"></a>

```java
public PipelineClusterAwsAttributes getAwsAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `azureAttributesInput`<sup>Optional</sup> <a name="azureAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput"></a>

```java
public PipelineClusterAzureAttributes getAzureAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `clusterLogConfInput`<sup>Optional</sup> <a name="clusterLogConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput"></a>

```java
public PipelineClusterClusterLogConf getClusterLogConfInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverInstancePoolIdInput`<sup>Optional</sup> <a name="driverInstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput"></a>

```java
public java.lang.String getDriverInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `driverNodeTypeIdInput`<sup>Optional</sup> <a name="driverNodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput"></a>

```java
public java.lang.String getDriverNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `enableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="enableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput"></a>

```java
public java.lang.Object getEnableLocalDiskEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gcpAttributesInput`<sup>Optional</sup> <a name="gcpAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput"></a>

```java
public PipelineClusterGcpAttributes getGcpAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `initScriptsInput`<sup>Optional</sup> <a name="initScriptsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput"></a>

```java
public java.lang.Object getInitScriptsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts">PipelineClusterInitScripts</a>>

---

##### `instancePoolIdInput`<sup>Optional</sup> <a name="instancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput"></a>

```java
public java.lang.String getInstancePoolIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeIdInput`<sup>Optional</sup> <a name="nodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput"></a>

```java
public java.lang.String getNodeTypeIdInput();
```

- *Type:* java.lang.String

---

##### `numWorkersInput`<sup>Optional</sup> <a name="numWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput"></a>

```java
public java.lang.Number getNumWorkersInput();
```

- *Type:* java.lang.Number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `sparkConfInput`<sup>Optional</sup> <a name="sparkConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConfInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkEnvVarsInput`<sup>Optional</sup> <a name="sparkEnvVarsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applyPolicyDefaultValues`<sup>Required</sup> <a name="applyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues"></a>

```java
public java.lang.Object getApplyPolicyDefaultValues();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `driverInstancePoolId`<sup>Required</sup> <a name="driverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId"></a>

```java
public java.lang.String getDriverInstancePoolId();
```

- *Type:* java.lang.String

---

##### `driverNodeTypeId`<sup>Required</sup> <a name="driverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId"></a>

```java
public java.lang.String getDriverNodeTypeId();
```

- *Type:* java.lang.String

---

##### `enableLocalDiskEncryption`<sup>Required</sup> <a name="enableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption"></a>

```java
public java.lang.Object getEnableLocalDiskEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `nodeTypeId`<sup>Required</sup> <a name="nodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId"></a>

```java
public java.lang.String getNodeTypeId();
```

- *Type:* java.lang.String

---

##### `numWorkers`<sup>Required</sup> <a name="numWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers"></a>

```java
public java.lang.Number getNumWorkers();
```

- *Type:* java.lang.Number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `sparkConf`<sup>Required</sup> <a name="sparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkConf();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkEnvVars`<sup>Required</sup> <a name="sparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineCluster">PipelineCluster</a>

---


### PipelineDeploymentOutputReference <a name="PipelineDeploymentOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineDeploymentOutputReference;

new PipelineDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetMetadataFilePath">resetMetadataFilePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKind` <a name="resetKind" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetMetadataFilePath` <a name="resetMetadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetMetadataFilePath"></a>

```java
public void resetMetadataFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePathInput">metadataFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePath">metadataFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `metadataFilePathInput`<sup>Optional</sup> <a name="metadataFilePathInput" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePathInput"></a>

```java
public java.lang.String getMetadataFilePathInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `metadataFilePath`<sup>Required</sup> <a name="metadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePath"></a>

```java
public java.lang.String getMetadataFilePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.internalValue"></a>

```java
public PipelineDeployment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---


### PipelineFiltersOutputReference <a name="PipelineFiltersOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineFiltersOutputReference;

new PipelineFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue"></a>

```java
public PipelineFilters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---


### PipelineLibraryFileOutputReference <a name="PipelineLibraryFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryFileOutputReference;

new PipelineLibraryFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue"></a>

```java
public PipelineLibraryFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---


### PipelineLibraryList <a name="PipelineLibraryList" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryList;

new PipelineLibraryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get"></a>

```java
public PipelineLibraryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>>

---


### PipelineLibraryMavenOutputReference <a name="PipelineLibraryMavenOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryMavenOutputReference;

new PipelineLibraryMavenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo"></a>

```java
public void resetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates">coordinates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions">exclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput"></a>

```java
public java.lang.String getCoordinatesInput();
```

- *Type:* java.lang.String

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput"></a>

```java
public java.util.List<java.lang.String> getExclusionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates"></a>

```java
public java.lang.String getCoordinates();
```

- *Type:* java.lang.String

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions"></a>

```java
public java.util.List<java.lang.String> getExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue"></a>

```java
public PipelineLibraryMaven getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---


### PipelineLibraryNotebookOutputReference <a name="PipelineLibraryNotebookOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryNotebookOutputReference;

new PipelineLibraryNotebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue"></a>

```java
public PipelineLibraryNotebook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---


### PipelineLibraryOutputReference <a name="PipelineLibraryOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineLibraryOutputReference;

new PipelineLibraryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile"></a>

```java
public void putFile(PipelineLibraryFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven"></a>

```java
public void putMaven(PipelineLibraryMaven value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook"></a>

```java
public void putNotebook(PipelineLibraryNotebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar"></a>

```java
public void resetJar()
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven"></a>

```java
public void resetMaven()
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook"></a>

```java
public void resetNotebook()
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl"></a>

```java
public void resetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file">file</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput">fileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput">mavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput">notebookInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput">whlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl">whl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file"></a>

```java
public PipelineLibraryFileOutputReference getFile();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven"></a>

```java
public PipelineLibraryMavenOutputReference getMaven();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook"></a>

```java
public PipelineLibraryNotebookOutputReference getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput"></a>

```java
public PipelineLibraryFile getFileInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput"></a>

```java
public PipelineLibraryMaven getMavenInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput"></a>

```java
public PipelineLibraryNotebook getNotebookInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput"></a>

```java
public java.lang.String getWhlInput();
```

- *Type:* java.lang.String

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl"></a>

```java
public java.lang.String getWhl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary">PipelineLibrary</a>

---


### PipelineNotificationList <a name="PipelineNotificationList" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineNotificationList;

new PipelineNotificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get"></a>

```java
public PipelineNotificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>>

---


### PipelineNotificationOutputReference <a name="PipelineNotificationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineNotificationOutputReference;

new PipelineNotificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput">alertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput">emailRecipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts">alerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients">emailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertsInput`<sup>Optional</sup> <a name="alertsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput"></a>

```java
public java.util.List<java.lang.String> getAlertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailRecipientsInput`<sup>Optional</sup> <a name="emailRecipientsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput"></a>

```java
public java.util.List<java.lang.String> getEmailRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alerts`<sup>Required</sup> <a name="alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts"></a>

```java
public java.util.List<java.lang.String> getAlerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailRecipients`<sup>Required</sup> <a name="emailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients"></a>

```java
public java.util.List<java.lang.String> getEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineNotification">PipelineNotification</a>

---


### PipelineTimeoutsOutputReference <a name="PipelineTimeoutsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.pipeline.PipelineTimeoutsOutputReference;

new PipelineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---




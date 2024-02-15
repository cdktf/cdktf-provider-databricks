# `grant` Submodule <a name="`grant` Submodule" id="@cdktf/provider-databricks.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktf/provider-databricks.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant databricks_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grant.Grant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.Grant;

Grant.Builder.create(Construct scope, java.lang.String id)
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
    .principal(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
//  .catalog(java.lang.String)
//  .externalLocation(java.lang.String)
//  .foreignConnection(java.lang.String)
//  .function(java.lang.String)
//  .id(java.lang.String)
//  .metastore(java.lang.String)
//  .model(java.lang.String)
//  .pipeline(java.lang.String)
//  .recipient(java.lang.String)
//  .schema(java.lang.String)
//  .share(java.lang.String)
//  .storageCredential(java.lang.String)
//  .table(java.lang.String)
//  .volume(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#principal Grant#principal}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#privileges Grant#privileges}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#catalog Grant#catalog}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.externalLocation">externalLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#external_location Grant#external_location}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.foreignConnection">foreignConnection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#foreign_connection Grant#foreign_connection}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#function Grant#function}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.metastore">metastore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#metastore Grant#metastore}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#model Grant#model}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#pipeline Grant#pipeline}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.recipient">recipient</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#recipient Grant#recipient}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#schema Grant#schema}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.share">share</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#share Grant#share}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.storageCredential">storageCredential</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#storage_credential Grant#storage_credential}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#table Grant#table}. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.volume">volume</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#volume Grant#volume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#principal Grant#principal}.

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.privileges"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#privileges Grant#privileges}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#catalog Grant#catalog}.

---

##### `externalLocation`<sup>Optional</sup> <a name="externalLocation" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.externalLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#external_location Grant#external_location}.

---

##### `foreignConnection`<sup>Optional</sup> <a name="foreignConnection" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.foreignConnection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#foreign_connection Grant#foreign_connection}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.function"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#function Grant#function}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.metastore"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#metastore Grant#metastore}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.model"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#model Grant#model}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.pipeline"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#pipeline Grant#pipeline}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.recipient"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#recipient Grant#recipient}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#schema Grant#schema}.

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.share"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#share Grant#share}.

---

##### `storageCredential`<sup>Optional</sup> <a name="storageCredential" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.storageCredential"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#storage_credential Grant#storage_credential}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.table"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#table Grant#table}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.volume"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#volume Grant#volume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetExternalLocation">resetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetForeignConnection">resetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetMetastore">resetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetShare">resetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetStorageCredential">resetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.grant.Grant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.grant.Grant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.grant.Grant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.grant.Grant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.grant.Grant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.grant.Grant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.grant.Grant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.grant.Grant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.grant.Grant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.grant.Grant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-databricks.grant.Grant.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetExternalLocation` <a name="resetExternalLocation" id="@cdktf/provider-databricks.grant.Grant.resetExternalLocation"></a>

```java
public void resetExternalLocation()
```

##### `resetForeignConnection` <a name="resetForeignConnection" id="@cdktf/provider-databricks.grant.Grant.resetForeignConnection"></a>

```java
public void resetForeignConnection()
```

##### `resetFunction` <a name="resetFunction" id="@cdktf/provider-databricks.grant.Grant.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.grant.Grant.resetId"></a>

```java
public void resetId()
```

##### `resetMetastore` <a name="resetMetastore" id="@cdktf/provider-databricks.grant.Grant.resetMetastore"></a>

```java
public void resetMetastore()
```

##### `resetModel` <a name="resetModel" id="@cdktf/provider-databricks.grant.Grant.resetModel"></a>

```java
public void resetModel()
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktf/provider-databricks.grant.Grant.resetPipeline"></a>

```java
public void resetPipeline()
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktf/provider-databricks.grant.Grant.resetRecipient"></a>

```java
public void resetRecipient()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-databricks.grant.Grant.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetShare` <a name="resetShare" id="@cdktf/provider-databricks.grant.Grant.resetShare"></a>

```java
public void resetShare()
```

##### `resetStorageCredential` <a name="resetStorageCredential" id="@cdktf/provider-databricks.grant.Grant.resetStorageCredential"></a>

```java
public void resetStorageCredential()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.grant.Grant.resetTable"></a>

```java
public void resetTable()
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-databricks.grant.Grant.resetVolume"></a>

```java
public void resetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.grant.Grant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.Grant;

Grant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.Grant;

Grant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.Grant;

Grant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.Grant;

Grant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Grant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Grant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocationInput">externalLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput">foreignConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastoreInput">metastoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipelineInput">pipelineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privilegesInput">privilegesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipientInput">recipientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.shareInput">shareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput">storageCredentialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volumeInput">volumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocation">externalLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnection">foreignConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastore">metastore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipient">recipient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.share">share</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredential">storageCredential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.grant.Grant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.grant.Grant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.grant.Grant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.grant.Grant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.grant.Grant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.grant.Grant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.grant.Grant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.grant.Grant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.grant.Grant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.grant.Grant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-databricks.grant.Grant.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `externalLocationInput`<sup>Optional</sup> <a name="externalLocationInput" id="@cdktf/provider-databricks.grant.Grant.property.externalLocationInput"></a>

```java
public java.lang.String getExternalLocationInput();
```

- *Type:* java.lang.String

---

##### `foreignConnectionInput`<sup>Optional</sup> <a name="foreignConnectionInput" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput"></a>

```java
public java.lang.String getForeignConnectionInput();
```

- *Type:* java.lang.String

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.grant.Grant.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.grant.Grant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreInput`<sup>Optional</sup> <a name="metastoreInput" id="@cdktf/provider-databricks.grant.Grant.property.metastoreInput"></a>

```java
public java.lang.String getMetastoreInput();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-databricks.grant.Grant.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktf/provider-databricks.grant.Grant.property.pipelineInput"></a>

```java
public java.lang.String getPipelineInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-databricks.grant.Grant.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-databricks.grant.Grant.property.privilegesInput"></a>

```java
public java.util.List<java.lang.String> getPrivilegesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktf/provider-databricks.grant.Grant.property.recipientInput"></a>

```java
public java.lang.String getRecipientInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-databricks.grant.Grant.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="@cdktf/provider-databricks.grant.Grant.property.shareInput"></a>

```java
public java.lang.String getShareInput();
```

- *Type:* java.lang.String

---

##### `storageCredentialInput`<sup>Optional</sup> <a name="storageCredentialInput" id="@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput"></a>

```java
public java.lang.String getStorageCredentialInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.grant.Grant.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-databricks.grant.Grant.property.volumeInput"></a>

```java
public java.lang.String getVolumeInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-databricks.grant.Grant.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `externalLocation`<sup>Required</sup> <a name="externalLocation" id="@cdktf/provider-databricks.grant.Grant.property.externalLocation"></a>

```java
public java.lang.String getExternalLocation();
```

- *Type:* java.lang.String

---

##### `foreignConnection`<sup>Required</sup> <a name="foreignConnection" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnection"></a>

```java
public java.lang.String getForeignConnection();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.grant.Grant.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastore`<sup>Required</sup> <a name="metastore" id="@cdktf/provider-databricks.grant.Grant.property.metastore"></a>

```java
public java.lang.String getMetastore();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-databricks.grant.Grant.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-databricks.grant.Grant.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.grant.Grant.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.grant.Grant.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-databricks.grant.Grant.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-databricks.grant.Grant.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktf/provider-databricks.grant.Grant.property.share"></a>

```java
public java.lang.String getShare();
```

- *Type:* java.lang.String

---

##### `storageCredential`<sup>Required</sup> <a name="storageCredential" id="@cdktf/provider-databricks.grant.Grant.property.storageCredential"></a>

```java
public java.lang.String getStorageCredential();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.grant.Grant.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-databricks.grant.Grant.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.grant.Grant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktf/provider-databricks.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.grant.GrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.grant.GrantConfig;

GrantConfig.builder()
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
    .principal(java.lang.String)
    .privileges(java.util.List<java.lang.String>)
//  .catalog(java.lang.String)
//  .externalLocation(java.lang.String)
//  .foreignConnection(java.lang.String)
//  .function(java.lang.String)
//  .id(java.lang.String)
//  .metastore(java.lang.String)
//  .model(java.lang.String)
//  .pipeline(java.lang.String)
//  .recipient(java.lang.String)
//  .schema(java.lang.String)
//  .share(java.lang.String)
//  .storageCredential(java.lang.String)
//  .table(java.lang.String)
//  .volume(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#principal Grant#principal}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.privileges">privileges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#privileges Grant#privileges}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#catalog Grant#catalog}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation">externalLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#external_location Grant#external_location}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection">foreignConnection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#foreign_connection Grant#foreign_connection}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#function Grant#function}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.metastore">metastore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#metastore Grant#metastore}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.model">model</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#model Grant#model}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#pipeline Grant#pipeline}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.recipient">recipient</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#recipient Grant#recipient}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#schema Grant#schema}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.share">share</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#share Grant#share}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential">storageCredential</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#storage_credential Grant#storage_credential}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#table Grant#table}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.volume">volume</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#volume Grant#volume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.grant.GrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.grant.GrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.grant.GrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.GrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.grant.GrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.grant.GrantConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#principal Grant#principal}.

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-databricks.grant.GrantConfig.property.privileges"></a>

```java
public java.util.List<java.lang.String> getPrivileges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#privileges Grant#privileges}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-databricks.grant.GrantConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#catalog Grant#catalog}.

---

##### `externalLocation`<sup>Optional</sup> <a name="externalLocation" id="@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation"></a>

```java
public java.lang.String getExternalLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#external_location Grant#external_location}.

---

##### `foreignConnection`<sup>Optional</sup> <a name="foreignConnection" id="@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection"></a>

```java
public java.lang.String getForeignConnection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#foreign_connection Grant#foreign_connection}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.grant.GrantConfig.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#function Grant#function}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.grant.GrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="@cdktf/provider-databricks.grant.GrantConfig.property.metastore"></a>

```java
public java.lang.String getMetastore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#metastore Grant#metastore}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-databricks.grant.GrantConfig.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#model Grant#model}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktf/provider-databricks.grant.GrantConfig.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#pipeline Grant#pipeline}.

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktf/provider-databricks.grant.GrantConfig.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#recipient Grant#recipient}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-databricks.grant.GrantConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#schema Grant#schema}.

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktf/provider-databricks.grant.GrantConfig.property.share"></a>

```java
public java.lang.String getShare();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#share Grant#share}.

---

##### `storageCredential`<sup>Optional</sup> <a name="storageCredential" id="@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential"></a>

```java
public java.lang.String getStorageCredential();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#storage_credential Grant#storage_credential}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.grant.GrantConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#table Grant#table}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-databricks.grant.GrantConfig.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.3/docs/resources/grant#volume Grant#volume}.

---




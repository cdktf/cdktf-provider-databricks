# `dataDatabricksCleanRoomAutoApprovalRule` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRule` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRule <a name="DataDatabricksCleanRoomAutoApprovalRule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRule;

DataDatabricksCleanRoomAutoApprovalRule.Builder.create(Construct scope, java.lang.String id)
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
//  .authorCollaboratorAlias(java.lang.String)
//  .authorScope(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .runnerCollaboratorAlias(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorScope">authorScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorCollaboratorAlias`<sup>Optional</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorCollaboratorAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `authorScope`<sup>Optional</sup> <a name="authorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.authorScope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.cleanRoomName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}.

---

##### `runnerCollaboratorAlias`<sup>Optional</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.runnerCollaboratorAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias">resetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope">resetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias">resetRunnerCollaboratorAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorCollaboratorAlias` <a name="resetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias"></a>

```java
public void resetAuthorCollaboratorAlias()
```

##### `resetAuthorScope` <a name="resetAuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope"></a>

```java
public void resetAuthorScope()
```

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName"></a>

```java
public void resetCleanRoomName()
```

##### `resetRunnerCollaboratorAlias` <a name="resetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias"></a>

```java
public void resetRunnerCollaboratorAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRule;

DataDatabricksCleanRoomAutoApprovalRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRule;

DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRule;

DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRule;

DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksCleanRoomAutoApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias">ruleOwnerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput">authorCollaboratorAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput">authorScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput">runnerCollaboratorAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope">authorScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `ruleOwnerCollaboratorAlias`<sup>Required</sup> <a name="ruleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias"></a>

```java
public java.lang.String getRuleOwnerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `authorCollaboratorAliasInput`<sup>Optional</sup> <a name="authorCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput"></a>

```java
public java.lang.String getAuthorCollaboratorAliasInput();
```

- *Type:* java.lang.String

---

##### `authorScopeInput`<sup>Optional</sup> <a name="authorScopeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput"></a>

```java
public java.lang.String getAuthorScopeInput();
```

- *Type:* java.lang.String

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput"></a>

```java
public java.lang.String getCleanRoomNameInput();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliasInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput"></a>

```java
public java.lang.String getRunnerCollaboratorAliasInput();
```

- *Type:* java.lang.String

---

##### `authorCollaboratorAlias`<sup>Required</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias"></a>

```java
public java.lang.String getAuthorCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `authorScope`<sup>Required</sup> <a name="authorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope"></a>

```java
public java.lang.String getAuthorScope();
```

- *Type:* java.lang.String

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAlias`<sup>Required</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias"></a>

```java
public java.lang.String getRunnerCollaboratorAlias();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRuleConfig <a name="DataDatabricksCleanRoomAutoApprovalRuleConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_auto_approval_rule.DataDatabricksCleanRoomAutoApprovalRuleConfig;

DataDatabricksCleanRoomAutoApprovalRuleConfig.builder()
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
//  .authorCollaboratorAlias(java.lang.String)
//  .authorScope(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .runnerCollaboratorAlias(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope">authorScope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorCollaboratorAlias`<sup>Optional</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias"></a>

```java
public java.lang.String getAuthorCollaboratorAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `authorScope`<sup>Optional</sup> <a name="authorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope"></a>

```java
public java.lang.String getAuthorScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}.

---

##### `runnerCollaboratorAlias`<sup>Optional</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias"></a>

```java
public java.lang.String getRunnerCollaboratorAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}.

---



